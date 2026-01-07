export default function Footer({ t }: { t: any }) {
    return (
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          {t.footer}
        </div>
      </footer>
    );
  }
  