"use client";
import Button from "../UI/Button";

function AuthButtons() {
  const handleNavigate = () => window.open("https://chat.aveta.app", "_blank");
  return (
    <div className="flex items-center justify-center gap-3  max-lg:flex-col max-lg:w-full">
      <Button
        buttonType="outline"
        className="w-20 max-lg:w-full"
        onClick={handleNavigate}
      >
        Sign in
      </Button>
      <Button className="w-20 max-lg:w-full" onClick={handleNavigate}>
        Sign up
      </Button>
    </div>
  );
}

export default AuthButtons;
