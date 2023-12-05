import { useState } from "react";
import { useTranslation } from "react-i18next";
import {enFlagImage} from "../images/DataGraph.png"
import {arFlagImage} from "../images/LoginLap.png";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const languageOptions = [
    { value: "en", label: "English", flag: enFlagImage },
    { value: "ar", label: "Arabic", flag: arFlagImage },
  ];

  return (
    <div className="language-selector">
      <select
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            <img src={option.flag} alt={option.label} className="flag-icon" />
            {option.label}
          </option>
        ))}
      </select>

      <style jsx>{`
        .flag-icon {
          width: 24px; // Adjust the width as needed
          height: 16px; // Adjust the height as needed
          margin-right: 5px; // Adjust spacing between flag and label
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
