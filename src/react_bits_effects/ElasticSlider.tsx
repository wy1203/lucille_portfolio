import type { ChangeEvent, FormEvent } from "react";
import { RiVolumeDownFill, RiVolumeUpFill } from "react-icons/ri";
import "../react_bits_styles/ElasticSlider.css";

interface ElasticSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

export default function ElasticSlider({
  value,
  onValueChange,
}: ElasticSliderProps) {
  const clampVolume = (rawValue: number) => {
    if (!Number.isFinite(rawValue)) {
      return 0;
    }
    if (rawValue < 0) {
      return 0;
    }
    if (rawValue > 100) {
      return 100;
    }
    return rawValue;
  };

  const readSliderValue = (element: HTMLInputElement) => {
    const numeric = element.valueAsNumber;
    if (Number.isFinite(numeric)) {
      return numeric;
    }

    const fallback = Number.parseFloat(element.value);
    if (Number.isFinite(fallback)) {
      return fallback;
    }

    return 0;
  };

  const propagateValue = (rawValue: number) => {
    const normalized = clampVolume(rawValue);
    if (normalized !== value) {
      onValueChange(normalized);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    propagateValue(readSliderValue(event.currentTarget));
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    propagateValue(readSliderValue(event.currentTarget));
  };

  return (
    <div className="elastic-slider-container">
      <div className="elastic-slider-icon-wrapper">
        {RiVolumeDownFill({ className: "elastic-slider-icon" })}
      </div>

      <div className="elastic-slider-wrapper">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={value}
          onChange={handleChange}
          onInput={handleInput}
          className="elastic-slider-input"
          style={{
            background: `linear-gradient(to right, white 0%, white ${value}%, rgba(255, 255, 255, 0.4) ${value}%, rgba(255, 255, 255, 0.4) 100%)`,
          }}
        />
      </div>

      <div className="elastic-slider-icon-wrapper">
        {RiVolumeUpFill({ className: "elastic-slider-icon" })}
      </div>
    </div>
  );
}
