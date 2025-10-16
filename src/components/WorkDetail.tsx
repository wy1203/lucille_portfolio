import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useMusic } from "./BackgroundMusic";
import {
  worksData,
  WorkDetail as WorkData,
  ContentBlock,
  VideoBlock,
} from "../data/worksData";
import ImageModal from "./ImageModal";
import VideoModal from "./VideoModal";
import ElasticSlider from "../react_bits_effects/ElasticSlider";
import NextProjects from "./NextProjects";
import PDFViewer from "./PDFViewer";
import AnimatedSidebar from "./AnimatedSidebar";
import "../styles/WorkDetail.css";

const VideoBlockComponent = ({
  block,
  marginStyle,
  onVideoClick,
}: {
  block: VideoBlock;
  marginStyle: React.CSSProperties;
  onVideoClick: (videoSrc: string, title: string) => void;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoClick = () => {
    onVideoClick(block.src, block.title || "Video");
  };

  return (
    <div
      className={`video-block ${block.size || "medium"}`}
      style={marginStyle}
    >
      <div className="video-inline-container">
        <video
          ref={videoRef}
          className="video-inline"
          src={block.src}
          onClick={handleVideoClick}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <div className="video-inline-controls">
          <button
            className="video-play-pause-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            className="video-fullscreen-btn"
            onClick={handleVideoClick}
            aria-label="Open fullscreen"
          >
            ⛶
          </button>
        </div>
      </div>
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </div>
  );
};

const ContentRenderer = ({
  blocks,
  onImageClick,
  onVideoClick
}: {
  blocks: ContentBlock[];
  onImageClick: (imageSrc: string) => void;
  onVideoClick: (videoSrc: string, title: string) => void;
}) => {
  const getMarginStyle = (block: ContentBlock) => {
    const style: React.CSSProperties = {};
    if (block.marginTop) style.marginTop = block.marginTop;
    if (block.marginBottom) style.marginBottom = block.marginBottom;
    return style;
  };

  const parseInlineFormatting = (text: string) => {
    // Support both **bold** markdown syntax and <strong> HTML tags
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  return (
    <div className="content-blocks">
      {blocks.map((block, index) => {
        const marginStyle = getMarginStyle(block);

        switch (block.type) {
          case "text":
            return (
              <p
                key={index}
                className={`text-block ${block.size || "normal"} ${
                  block.emphasis ? "emphasis" : ""
                }`}
                style={marginStyle}
                dangerouslySetInnerHTML={{ __html: parseInlineFormatting(block.content) }}
              />
            );

          case "title":
            const getFontSize = (size?: string) => {
              if (!size) return undefined;
              const presetSizes: Record<string, string> = {
                small: "1.5rem",
                medium: "2rem",
                large: "2.5rem",
                xlarge: "3rem",
              };
              return presetSizes[size] || size;
            };

            const getFontWeight = (weight?: string | number) => {
              if (!weight) return undefined;
              const presetWeights: Record<string, string> = {
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
              };
              return typeof weight === "number" ? weight : presetWeights[weight] || weight;
            };

            const titleStyle: React.CSSProperties = {
              ...marginStyle,
              ...(block.size && { fontSize: getFontSize(block.size) }),
              ...(block.color && { color: block.color }),
              ...(block.align && { textAlign: block.align }),
              ...(block.weight && { fontWeight: getFontWeight(block.weight) }),
              ...(block.lineHeight && { lineHeight: block.lineHeight }),
              ...(block.letterSpacing && { letterSpacing: block.letterSpacing }),
              ...(block.textTransform && { textTransform: block.textTransform }),
            };

            return (
              <h3
                key={index}
                className="title-block"
                style={titleStyle}
                dangerouslySetInnerHTML={{ __html: parseInlineFormatting(block.content) }}
              />
            );

          case "list":
            const ListTag = block.listType === "ordered" ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className={`list-block ${block.size || "normal"}`}
                style={marginStyle}
              >
                {block.items.map((item, itemIndex) => {
                  if (typeof item === "string") {
                    return (
                      <li
                        key={itemIndex}
                        dangerouslySetInnerHTML={{ __html: parseInlineFormatting(item) }}
                      />
                    );
                  } else {
                    return (
                      <li key={itemIndex}>
                        <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(item.content) }} />
                        {item.subItems && item.subItems.length > 0 && (
                          <ul className="sub-list">
                            {item.subItems.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                dangerouslySetInnerHTML={{ __html: parseInlineFormatting(subItem) }}
                              />
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }
                })}
              </ListTag>
            );

          case "image":
            return (
              <div
                key={index}
                className={`image-block ${block.size || "medium"}`}
                style={marginStyle}
              >
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  className={`${
                    block.aspectRatio ? `aspect-${block.aspectRatio}` : ""
                  } clickable-image`}
                  onClick={() => onImageClick(block.src)}
                  style={{ cursor: 'pointer' }}
                />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </div>
            );

          case "image-pair":
            const hasCustomSizes = block.images.some(
              (img) => img.size !== undefined
            );
            const isTopBottomLayout = block.layout === "top-bottom";
            const layout = isTopBottomLayout
              ? "top-bottom"
              : (hasCustomSizes ? "custom" : block.layout || "equal");

            const pairStyle = {
              ...marginStyle,
              ...(isTopBottomLayout && hasCustomSizes
                ? {
                    "--top-size": `${block.images[0]?.size || 50}%`,
                    "--bottom-size": `${block.images[1]?.size || 50}%`,
                  }
                : hasCustomSizes
                ? {
                    "--left-size": `${block.images[0]?.size || 50}%`,
                    "--right-size": `${block.images[1]?.size || 50}%`,
                  }
                : {}),
            } as React.CSSProperties;

            return (
              <div
                key={index}
                className={`image-pair ${layout} gap-${block.gap || "medium"}`}
                style={pairStyle}
              >
                {block.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="image-item">
                    <img
                      src={img.src}
                      alt={img.alt || ""}
                      className="clickable-image"
                      onClick={() => onImageClick(img.src)}
                      style={{ cursor: 'pointer' }}
                    />
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                  </div>
                ))}
              </div>
            );

          case "image-trio":
            const isTopBottom = block.layout === "top-bottom";
            const isHorizontal = block.layout === "horizontal";

            if (isHorizontal && block.horizontalImages) {
              // Horizontal layout: three images in a row
              const horizontalImages = block.horizontalImages;

              // Calculate CSS variables for image sizes
              const horizontalStyle = {
                ...marginStyle,
                "--image-width-1": horizontalImages[0]?.size ? `${horizontalImages[0].size}%` : '33.33%',
                "--image-width-2": horizontalImages[1]?.size ? `${horizontalImages[1].size}%` : '33.33%',
                "--image-width-3": horizontalImages[2]?.size ? `${horizontalImages[2].size}%` : '33.33%',
              } as React.CSSProperties;

              return (
                <div
                  key={index}
                  className={`image-trio horizontal gap-${block.gap || "medium"}`}
                  style={horizontalStyle}
                >
                  {horizontalImages.map((img, imgIndex) => (
                    <div key={imgIndex} className="image-item">
                      <img
                        src={img.src}
                        alt={img.alt || ""}
                        className="clickable-image"
                        onClick={() => onImageClick(img.src)}
                        style={{ cursor: 'pointer' }}
                      />
                      {img.caption && <figcaption>{img.caption}</figcaption>}
                    </div>
                  ))}
                </div>
              );
            } else if (isTopBottom && block.topImage && block.bottomImages) {
              // Top-bottom layout: one image on top, two on bottom
              const topImage = block.topImage;
              const bottomImages = block.bottomImages;

              // Calculate CSS variables for bottom image sizes
              const bottomStyle = {
                ...marginStyle,
                "--image-width-1": bottomImages[0]?.size ? `${bottomImages[0].size}%` : '1fr',
                "--image-width-2": bottomImages[1]?.size ? `${bottomImages[1].size}%` : '1fr',
              } as React.CSSProperties;

              return (
                <div
                  key={index}
                  className={`image-trio top-bottom gap-${block.gap || "medium"}`}
                  style={bottomStyle}
                >
                  <div className="top-image">
                    <img
                      src={topImage.src}
                      alt={topImage.alt || ""}
                      className="clickable-image"
                      onClick={() => onImageClick(topImage.src)}
                      style={{
                        cursor: 'pointer',
                        ...(topImage.height && { maxHeight: topImage.height }),
                        ...(topImage.position && { objectPosition: topImage.position })
                      }}
                    />
                    {topImage.caption && (
                      <figcaption>{topImage.caption}</figcaption>
                    )}
                  </div>
                  <div className="bottom-images">
                    {bottomImages.map((img, imgIndex) => (
                      <div key={imgIndex} className="image-item">
                        <img
                          src={img.src}
                          alt={img.alt || ""}
                          className="clickable-image"
                          onClick={() => onImageClick(img.src)}
                          style={{ cursor: 'pointer' }}
                        />
                        {img.caption && <figcaption>{img.caption}</figcaption>}
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else if (block.leftImage && block.rightImages) {
              // Default left-right layout: one left, two right
              const leftImage = block.leftImage;
              const rightImages = block.rightImages;
              const leftSize = leftImage.size || 50;
              const rightSize = 100 - leftSize;
              const trioStyle = {
                ...marginStyle,
                "--left-width": `${leftSize}%`,
                "--right-width": `${rightSize}%`,
              } as React.CSSProperties;

              return (
                <div
                  key={index}
                  className={`image-trio left-right gap-${block.gap || "medium"}`}
                  style={trioStyle}
                >
                  <div className="left-image">
                    <img
                      src={leftImage.src}
                      alt={leftImage.alt || ""}
                      className="clickable-image"
                      onClick={() => onImageClick(leftImage.src)}
                      style={{ cursor: 'pointer' }}
                    />
                    {leftImage.caption && (
                      <figcaption>{leftImage.caption}</figcaption>
                    )}
                  </div>
                  <div className="right-images">
                    {rightImages.map((img, imgIndex) => {
                      const imageStyle = img.size
                        ? ({
                            "--image-height": `${img.size}%`,
                          } as React.CSSProperties)
                        : {};

                      return (
                        <div
                          key={imgIndex}
                          className="image-item"
                          style={imageStyle}
                        >
                          <img
                            src={img.src}
                            alt={img.alt || ""}
                            className="clickable-image"
                            onClick={() => onImageClick(img.src)}
                            style={{ cursor: 'pointer' }}
                          />
                          {img.caption && <figcaption>{img.caption}</figcaption>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return null;
            }

          case "image-grid":
            return (
              <div
                key={index}
                className={`image-grid cols-${block.columns || 3} gap-${
                  block.gap || "medium"
                }`}
                style={marginStyle}
              >
                {block.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`image-item ${
                      img.span ? `span-${img.span}` : ""
                    }`}
                    style={{
                      ...(img.height && { height: img.height })
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || ""}
                      className="clickable-image"
                      onClick={() => onImageClick(img.src)}
                      style={{
                        cursor: 'pointer',
                        ...(img.height && { height: '100%', width: 'auto' }),
                        ...(img.position && { objectPosition: img.position }),
                        ...(img.objectFit && { objectFit: img.objectFit })
                      }}
                    />
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                  </div>
                ))}
              </div>
            );

          case "image-full":
            // Handle custom height and width values
            const isCustomHeight = block.height && !["small", "medium", "large", "viewport"].includes(block.height);
            const isCustomWidth = block.width && !["small", "medium", "large", "full"].includes(block.width);
            const alignment = block.align || "center";
            const alignItemsValue =
              alignment === "left"
                ? "flex-start"
                : alignment === "right"
                ? "flex-end"
                : "center";

            const imageFullStyle = {
              ...marginStyle,
              ...(isCustomHeight && { maxHeight: block.height }),
              ...(isCustomWidth && { maxWidth: block.width }),
              alignItems: alignItemsValue,
              alignSelf:
                alignment === "left"
                  ? "flex-start"
                  : alignment === "right"
                  ? "flex-end"
                  : "center",
              marginLeft:
                alignment === "left"
                  ? "0"
                  : alignment === "right"
                  ? "auto"
                  : "auto",
              marginRight:
                alignment === "left"
                  ? "auto"
                  : alignment === "right"
                  ? "0"
                  : "auto",
            };

            const imageStyle: React.CSSProperties = {
              cursor: 'pointer',
              ...(isCustomHeight && { maxHeight: block.height }),
              ...(isCustomWidth && { maxWidth: block.width, width: block.width }),
            };

            return (
              <div
                key={index}
                className={`image-full ${
                  !isCustomHeight ? block.height || "medium" : ""
                } ${
                  !isCustomWidth ? block.width || "" : ""
                }`.trim()}
                style={imageFullStyle}
              >
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  className="clickable-image"
                  onClick={() => onImageClick(block.src)}
                  style={imageStyle}
                />
                {block.caption && (
                  <figcaption style={{ textAlign: alignment }}>
                    {block.caption}
                  </figcaption>
                )}
              </div>
            );

          case "text-image":
            const layoutClass = block.layout === "text-right" ? "text-right" : "text-left";
            const textSizeClass = block.text.size || "normal";
            const textWidth = block.textWidth;
            const imageWidth =
              block.imageWidth !== undefined
                ? block.imageWidth
                : textWidth !== undefined
                ? Math.max(0, 100 - textWidth)
                : undefined;
            type TextImageStyles = React.CSSProperties & {
              "--text-width"?: string;
              "--image-width"?: string;
            };
            const layoutStyle: TextImageStyles = { ...marginStyle };
            if (textWidth !== undefined) {
              layoutStyle["--text-width"] = `${textWidth}%`;
            }
            if (imageWidth !== undefined) {
              layoutStyle["--image-width"] = `${imageWidth}%`;
            }

            const imageStyles: React.CSSProperties = {
              cursor: "pointer",
              ...(block.image.width && { width: block.image.width }),
              ...(block.image.height && { height: block.image.height }),
              ...(block.image.objectFit && { objectFit: block.image.objectFit }),
              ...(block.image.objectPosition && {
                objectPosition: block.image.objectPosition,
              }),
            };

            return (
              <div
                key={index}
                className={`text-image-block ${layoutClass}`}
                style={layoutStyle}
              >
                <div className={`text-content ${textSizeClass}`}>
                  {block.text.title && <h3>{block.text.title}</h3>}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: parseInlineFormatting(block.text.content),
                    }}
                  />
                </div>
                <div className="image-content">
                  <img
                    src={block.image.src}
                    alt={block.image.alt || ""}
                    className="clickable-image"
                    onClick={() => onImageClick(block.image.src)}
                    style={imageStyles}
                  />
                  {block.image.caption && (
                    <figcaption>{block.image.caption}</figcaption>
                  )}
                </div>
              </div>
            );

          case "video":
            return (
              <VideoBlockComponent
                key={index}
                block={block}
                marginStyle={marginStyle}
                onVideoClick={onVideoClick}
              />
            );

          case "spacer":
            return (
              <div
                key={index}
                className={`spacer ${block.size || "medium"}`}
                style={marginStyle}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { volume, setVolume } = useMusic();
  const [work, setWork] = useState<WorkData | null>(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [showFooter, setShowFooter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  // Extract all images from work data in order
  const allImages = useMemo(() => {
    if (!work) return [];

    const images: Array<{ src: string; alt?: string; caption?: string }> = [];

    // Add hero image first
    images.push({
      src: work.heroImage,
      alt: work.title,
      caption: work.description,
    });

    // Extract images from all sections
    Object.values(work.sections).forEach((section) => {
      if (section) {
        section.blocks.forEach((block) => {
          switch (block.type) {
            case "image":
              images.push({
                src: block.src,
                alt: block.alt,
                caption: block.caption,
              });
              break;
            case "image-pair":
              block.images.forEach((img) => {
                images.push({
                  src: img.src,
                  alt: img.alt,
                  caption: img.caption,
                });
              });
              break;
            case "image-trio":
              if (block.layout === "horizontal" && block.horizontalImages) {
                block.horizontalImages.forEach((img) => {
                  images.push({
                    src: img.src,
                    alt: img.alt,
                    caption: img.caption,
                  });
                });
              } else if (block.layout === "top-bottom") {
                if (block.topImage) {
                  const topImage = block.topImage;
                  images.push({
                    src: topImage.src,
                    alt: topImage.alt,
                    caption: topImage.caption,
                  });
                }
                if (block.bottomImages) {
                  const bottomImages = block.bottomImages;
                  bottomImages.forEach((img) => {
                    images.push({
                      src: img.src,
                      alt: img.alt,
                      caption: img.caption,
                    });
                  });
                }
              } else {
                if (block.leftImage) {
                  const leftImage = block.leftImage;
                  images.push({
                    src: leftImage.src,
                    alt: leftImage.alt,
                    caption: leftImage.caption,
                  });
                }
                if (block.rightImages) {
                  const rightImages = block.rightImages;
                  rightImages.forEach((img) => {
                    images.push({
                      src: img.src,
                      alt: img.alt,
                      caption: img.caption,
                    });
                  });
                }
              }
              break;
            case "image-grid":
              block.images.forEach((img) => {
                images.push({
                  src: img.src,
                  alt: img.alt,
                  caption: img.caption,
                });
              });
              break;
            case "image-full":
              images.push({
                src: block.src,
                alt: block.alt,
                caption: block.caption,
              });
              break;
          }
        });
      }
    });

    return images;
  }, [work]);

  const openModal = (imageSrc: string) => {
    const imageIndex = allImages.findIndex((img) => img.src === imageSrc);
    if (imageIndex !== -1) {
      setModalImageIndex(imageIndex);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateModal = (index: number) => {
    setModalImageIndex(index);
  };

  const openVideoModal = (videoSrc: string, title: string) => {
    setCurrentVideoSrc(videoSrc);
    setCurrentVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    const foundWork = worksData.find((w) => w.id === Number(id));
    setWork(foundWork || null);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      // Get all section keys that exist in the work
      const sectionKeys = work?.sections ? Object.keys(work.sections).filter(key => work.sections[key]) : [];

      // Define preferred order for sections
      const sectionOrder = [
        "overview",
        "strategyAndAnalysis",
        "challenge",
        "designSolution",
        "solution",
        "impactAndResults",
        "impact",
        "reflection",
      ];

      // Sort sections by preferred order
      const sections = sectionKeys.sort((a, b) => {
        const aIndex = sectionOrder.indexOf(a);
        const bIndex = sectionOrder.indexOf(b);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const isAtBottom = windowHeight + scrollTop >= documentHeight - 100;
      setShowFooter(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [work]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  if (!work) {
    return (
      <div className="work-detail-error">
        <h1>Work not found</h1>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const shouldRenderSidebar = work.displayType !== "pdf";

  return (
    <div className="work-detail-page">
      <motion.header
        className="header work-detail-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo" onClick={() => navigate("/")}>
          <img src="/icons/luc.png" alt="LW" />
        </div>
        <nav className="nav">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              navigate("/");
            }}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              navigate("/about");
            }}
          >
            About
          </a>
          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              navigate("/gallery");
            }}
          >
            Gallery
          </a>
          <a
            href="/data/Lucille Wang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <div className="music-toggle">
            <ElasticSlider value={volume} onValueChange={setVolume} />
          </div>
        </nav>
      </motion.header>

      {shouldRenderSidebar && (() => {
        const sectionKeys = work?.sections ? Object.keys(work.sections).filter(key => work.sections[key]) : [];
        const sectionOrder = [
          "overview",
          "strategyAndAnalysis",
          "challenge",
          "designSolution",
          "solution",
          "impactAndResults",
          "impact",
          "reflection",
        ];

        const sortedSections = sectionKeys
          .sort((a, b) => {
            const aIndex = sectionOrder.indexOf(a);
            const bIndex = sectionOrder.indexOf(b);
            if (aIndex === -1 && bIndex === -1) return 0;
            if (aIndex === -1) return 1;
            if (bIndex === -1) return -1;
            return aIndex - bIndex;
          })
          .map((sectionKey) => {
            const section = work?.sections?.[sectionKey];
            return {
              id: sectionKey,
              title: section?.title || "",
            };
          })
          .filter((section) => section.title);

        return (
          <AnimatedSidebar
            sections={sortedSections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        );
      })()}

      <div className={`work-detail-container${work.displayType === "pdf" ? " pdf-layout" : ""}`}>
        <main className="work-detail-main">
          <motion.div
            className="work-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="work-hero-content">
              <span className="work-category-tag">{work.category}</span>
              <h1 className="work-title-detail">{work.title}</h1>
              <p className="work-subtitle">{work.description}</p>
            </div>
            <img
              src={work.heroImage}
              alt={work.title}
              className="work-hero-image clickable-image"
              style={{
                objectPosition: work.heroImagePosition || 'center',
                objectFit: work.heroImageFit || 'cover',
                cursor: 'pointer'
              }}
              onClick={() => openModal(work.heroImage)}
            />
          </motion.div>

          <div className="work-content">
            <div className="work-meta">
              <div className="work-meta-item">
                <h3>Role</h3>
                <p>{work.role}</p>
              </div>
              {work.client && (
                <div className="work-meta-item">
                  <h3>Client</h3>
                  <p>{work.client}</p>
                </div>
              )}
              {work.team && (
                <div className="work-meta-item">
                  <h3>Team</h3>
                  <p>{work.team}</p>
                </div>
              )}
              {work.timeline && (
                <div className="work-meta-item">
                  <h3>Timeline</h3>
                  <p>{work.timeline}</p>
                </div>
              )}
              {work.skills && (
                <div className="work-meta-item">
                  <h3>Skills</h3>
                  <div className="skills-list">
                    {work.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {work.displayType === "pdf" && work.pdfPath ? (
              <PDFViewer pdfPath={work.pdfPath} />
            ) : (
              <>
                {(() => {
                  const sectionKeys = work?.sections ? Object.keys(work.sections).filter(key => work.sections[key]) : [];
                  const sectionOrder = [
                    "overview",
                    "strategyAndAnalysis",
                    "challenge",
                    "designSolution",
                    "solution",
                    "impactAndResults",
                    "impact",
                    "reflection",
                  ];

                  return sectionKeys
                    .sort((a, b) => {
                      const aIndex = sectionOrder.indexOf(a);
                      const bIndex = sectionOrder.indexOf(b);
                      if (aIndex === -1 && bIndex === -1) return 0;
                      if (aIndex === -1) return 1;
                      if (bIndex === -1) return -1;
                      return aIndex - bIndex;
                    })
                    .map((sectionKey) => {
                      const section = work?.sections?.[sectionKey];
                      if (!section) return null;

                      return (
                        <section
                          key={sectionKey}
                          id={sectionKey}
                          className="work-section"
                        >
                          <h2>{section.title}</h2>
                          <ContentRenderer blocks={section.blocks} onImageClick={openModal} onVideoClick={openVideoModal} />
                        </section>
                      );
                    });
                })()}
              </>
            )}
          </div>
        </main>
      </div>

      <div
        className={`next-projects-section-wrapper${
          work.displayType === "pdf" ? " pdf-layout" : ""
        }`}
      >
        <NextProjects currentWorkId={work.id} />
      </div>

      {showFooter && (
        <motion.footer
          className="footer work-detail-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="footer-content">
            <div className="footer-left">
              <a href="mailto:lw686@cornell.edu" className="footer-email-link">
                Contact Me at: lw686@cornell.edu
              </a>
              <a
                href="https://www.linkedin.com/in/lucille-wang-7b057b240/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-linkedin-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <div className="footer-right">
              <p className="footer-copyright">Created by Lucille Wang © 2025</p>
            </div>
          </div>
        </motion.footer>
      )}

      <ImageModal
        images={allImages}
        currentIndex={modalImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNavigate={navigateModal}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoSrc={currentVideoSrc}
        title={currentVideoTitle}
      />
    </div>
  );
};

export default WorkDetail;
