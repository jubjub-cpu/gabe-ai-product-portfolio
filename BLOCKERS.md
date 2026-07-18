# Blockers

| Status | Project | Exact Blocker | Alternatives Attempted | Required Action | Parallel Work |
| --- | --- | --- | --- | --- | --- |
| Resolved | Publishing | Normal `git` was not available on PATH in this environment. | Checked `gh auth status`, installed Git for Windows 2.55.0 with `winget`, and confirmed `C:\Program Files\Git\cmd\git.exe`. | None. Publishing can proceed. | Local static portfolio completed and validated. |
| Resolved | Live deployment | No static host had been configured yet. | Built file-based demos, then enabled GitHub Pages from `main`. | None. Live demo is available at https://jubjub-cpu.github.io/gabe-ai-product-portfolio/. | Continue optional profile and standalone repo work. |
| Active, non-blocking | GitHub Actions | The authenticated token has `repo` scope but not the additional `workflow` scope required to create workflow files through the API. | Verified current scopes; retained project-level PowerShell validation and browser checks. | None for release. A future token authorization with workflow scope would enable hosted checks. | Build, test, publish, and release with local validation evidence. |
