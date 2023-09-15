import React from "react";
import { Header } from "../../shared/ui";
import { VisaCardContainer, VisaConfirm } from "../../components/Confirmation";

function Confirmation() {
  return (
    <div className="w-full">
      <header>
        <Header title="Confirmation" path="/" />
      </header>
      <main className="w-full h-screen bg-gray-100 p-5 relative">
        <VisaConfirm/>
        <VisaCardContainer/>
      </main>
    </div>
  );
}

export default Confirmation;
