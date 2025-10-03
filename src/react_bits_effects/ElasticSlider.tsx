import { RiVolumeDownFill, RiVolumeUpFill } from 'react-icons/ri';
import "../styles/ElasticSlider.css";

interface ElasticSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

export default function ElasticSlider({ value, onValueChange }: ElasticSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onValueChange(newValue);
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
          className="elastic-slider-input"
          style={{
            background: `linear-gradient(to right, white 0%, white ${value}%, rgba(255, 255, 255, 0.4) ${value}%, rgba(255, 255, 255, 0.4) 100%)`
          }}
        />
      </div>

      <div className="elastic-slider-icon-wrapper">
        {RiVolumeUpFill({ className: "elastic-slider-icon" })}
      </div>
    </div>
  );
}
