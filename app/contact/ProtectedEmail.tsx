"use client";

const localParts = ["pengfei", ".", "liu"];
const domainParts = ["eas", ".", "gatech", ".", "edu"];

export function ProtectedEmail() {
  const openEmail = () => {
    const address = `${localParts.join("")}@${domainParts.join("")}`;
    window.location.href = `mailto:${address}`;
  };

  return (
    <button
      type="button"
      className="protected-email"
      aria-label="Email Pengfei Liu"
      onClick={openEmail}
    >
      pengfei.liu <span aria-hidden="true">[at]</span> eas.gatech.edu
    </button>
  );
}

