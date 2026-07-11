export default function Footer({ t }: { t: any }) {
    return (
        <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-xs font-bold text-white">
                        RM
                    </div>
                    <p className="text-sm text-neutral-500">{t.footer}</p>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-neutral-500">
                    <a
                        href="https://github.com/RoiMeshulam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-neutral-900"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/roi-meshulam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-neutral-900"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:rohimesh21@gmail.com"
                        className="transition-colors hover:text-blue-600"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
