import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="mt-16 pt-6 border-t border-neutral-800">
      <p className="text-xs text-neutral-600 leading-relaxed mb-3">
        <T>
          This is an example application built with General Translation to
          demonstrate internationalization. All podcast data is fictional.
        </T>
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-700">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500 transition-colors"
        >
          Next.js
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500 transition-colors"
        >
          MDN: lang attribute
        </a>
        <a
          href="https://www.w3.org/International/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500 transition-colors"
        >
          W3C Internationalization
        </a>
      </div>
    </footer>
  );
}
