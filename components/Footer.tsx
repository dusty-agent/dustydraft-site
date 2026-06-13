import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">

      <div className="max-w-5xl mx-auto px-6 py-10">

        <Link
          href="/"
          className="font-semibold hover:underline"
        >
          dustydraft.com
        </Link>

        <div className="mt-4 flex flex-wrap gap-6 text-sm">

          <a
            href="https://draft.best"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            DRAFT House →
          </a>

          <a
            href="https://exoticordinary.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            The Exotic Ordinary →
          </a>

          <a
            href="https://blog.naver.com/assetpicker"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AssetPicker →
          </a>

          <a
            href="https://theplaceyoung.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Rala's Tech Notes →
          </a>

        </div>

        <p className="mt-6 text-sm text-neutral-600">
          © 2019–2026 DUSTY DRAFT.
        </p>

      </div>

    </footer>
  );
}