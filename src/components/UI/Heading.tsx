function Heading({ text }: { text: string }) {
  return (
    <h1 className="font-bold text-center text-5xl max-lg:text-2xl max-md:text-lg max-sm:text-sm">
      {text}
    </h1>
  );
}

export default Heading;
