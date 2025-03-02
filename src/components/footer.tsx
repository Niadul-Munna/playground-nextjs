export function Footer() {
  return (
    <footer className="bg-accent  p-12 text-black">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/shadcn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Niadul PlayGround
            </a>
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a
                href="https://twitter.com/shadcn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shadcn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
