import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState();

  const currentYear = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const nextYear = (currentYear + 1).toString().slice(-2);
    setYear(`${currentYear}-${nextYear}`);
    return;
  };

  useEffect(() => currentYear, []);

  return (
    <footer className="footer bg-neutral-focus text-neutral-content px-4 py-2 justify-between rounded-2xl">
      <div>
        <p>
          Copyright © <span className="font-medium">{year}</span> - All right
          reserved by{" "}
          <a
            className="btn btn-link px-0 font-semibold "
            href="https://github.com/RajRatan12"
            title="Source Code"
            alt="Link to Github Repo"
            target="_blank"
          >
            SavorStory
          </a>
        </p>
      </div>
      <div>
        <p>
          Crafted by{" "}
          <a
            className="btn btn-link px-0 font-semibold"
            href="https://github.com/RajRatan12"
            title="Raj Ratan"
            alt="Developer's Github link"
            target="_blank"
          >
            Raj Ratan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
