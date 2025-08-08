function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-center text-xl opacity-70 font-medium  max-lg:text-lg max-sm:text-sm">
      {text}
    </p>
  );
}

export default Paragraph;
