import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="mt-16 pt-6 border-t border-neutral-800">
      <p className="text-xs text-neutral-600 leading-relaxed">
        <T>
          This is an example application built with General Translation to
          demonstrate internationalization. All podcast data is fictional.
        </T>
      </p>
    </footer>
  );
}
