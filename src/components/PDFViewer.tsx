import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "../styles/PDFViewer.css";

// Configure worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfPath: string;
}

const PDFViewer = ({ pdfPath }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [twoPageMode, setTwoPageMode] = useState<boolean>(false);
  const [pageInput, setPageInput] = useState<string>("1");
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setScale(1.0);
  };

  const scrollToPage = (pageNum: number) => {
    const pageElement = document.querySelector(`[data-page-number="${pageNum}"]`);
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToNextPage = () => {
    if (!numPages) return;
    const increment = twoPageMode ? 2 : 1;
    const nextPage = Math.min(currentPage + increment, numPages);
    setCurrentPage(nextPage);
    scrollToPage(nextPage);
  };

  const goToPrevPage = () => {
    const decrement = twoPageMode ? 2 : 1;
    const prevPage = Math.max(currentPage - decrement, 1);
    setCurrentPage(prevPage);
    scrollToPage(prevPage);
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput);
    if (numPages && pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
      scrollToPage(pageNum);
    } else {
      setPageInput(currentPage.toString());
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const toggleTwoPageMode = () => {
    setTwoPageMode((prev) => !prev);
    if (!twoPageMode && currentPage % 2 === 0) {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevPage();
      } else if (e.key === "ArrowRight") {
        goToNextPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, numPages, twoPageMode]);

  // Update page input when current page changes
  useEffect(() => {
    setPageInput(currentPage.toString());
  }, [currentPage]);

  const renderPages = () => {
    if (!numPages) return null;

    // Always render all pages to enable scrolling
    return Array.from(new Array(numPages), (el, index) => (
      <Page
        key={`page_${index + 1}`}
        pageNumber={index + 1}
        scale={scale}
        renderTextLayer={true}
        renderAnnotationLayer={true}
        loading={<div className="pdf-page-loading">Loading page...</div>}
      />
    ));
  };

  return (
    <div
      className={`pdf-viewer-container ${isFullscreen ? "pdf-fullscreen" : ""}`}
      ref={containerRef}
    >
      <div className="pdf-controls">
        <div className="pdf-controls-left">
          <button
            onClick={goToPrevPage}
            className="pdf-nav-button"
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ←
          </button>

          <form onSubmit={handlePageInputSubmit} className="pdf-page-input-form">
            <input
              type="number"
              min="1"
              max={numPages || 1}
              value={pageInput}
              onChange={handlePageInputChange}
              className="pdf-page-input"
              aria-label="Page number"
            />
            <span className="pdf-page-separator">/</span>
            <span className="pdf-page-total">{numPages || "-"}</span>
          </form>

          <button
            onClick={goToNextPage}
            className="pdf-nav-button"
            disabled={!numPages || currentPage >= numPages}
            aria-label="Next page"
          >
            →
          </button>
        </div>

        <div className="pdf-controls-center">
          <button
            onClick={toggleTwoPageMode}
            className={`pdf-mode-button ${twoPageMode ? "active" : ""}`}
            aria-label="Toggle two-page mode"
          >
            {twoPageMode ? "Single Page" : "Two Pages"}
          </button>
          <button
            onClick={toggleFullscreen}
            className="pdf-mode-button"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>

        <div className="pdf-controls-right">
          <button onClick={zoomOut} className="pdf-zoom-button" aria-label="Zoom out">
            −
          </button>
          <button onClick={resetZoom} className="pdf-zoom-reset">
            {Math.round(scale * 100)}%
          </button>
          <button onClick={zoomIn} className="pdf-zoom-button" aria-label="Zoom in">
            +
          </button>
        </div>
      </div>

      <div className="pdf-document-wrapper">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="pdf-loading">Loading PDF...</div>
          }
          error={
            <div className="pdf-error">
              Failed to load PDF. Please make sure the file exists.
            </div>
          }
        >
          <div className={`pdf-pages ${twoPageMode ? "pdf-two-page-mode" : ""}`}>
            {renderPages()}
          </div>
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
