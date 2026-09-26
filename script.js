/**
 * PREKSHA LIGHTING WORLD - MAIN JAVASCRIPT
 * Full Supabase Integration + Fallback Engine
 * Separate Category View + Video Lifecycle Management
 * WhatsApp Communication & Responsive Interactions
 */

// Global Constants & Config
const SUPABASE_URL = "https://pomjpixlffoibewaflfv.supabase.co";
const SUPABASE_KEY = "sb_publishable_b0k7bSRUXUT2v60PTwh5PA_dXh51-Uh";
const WHATSAPP_NUMBER = "917010114070";

// Embedded High-Resolution Vector Brand Logo Fallback
const PREKSHA_LOGO_FALLBACK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYwIDI4NiIgd2lkdGg9IjEwNjAiIGhlaWdodD0iMjg2Ij4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9InN1YnRsZS1jcmlzcC1zaGFkb3ciIHg9Ii01JSIgeT0iLTUlIiB3aWR0aD0iMTEwJSIgaGVpZ2h0PSIxMTAlIj4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjEuNSIgc3RkRGV2aWF0aW9uPSIxLjUiIGZsb29kLWNvbG9yPSIjMDAwMDAwIiBmbG9vZC1vcGFjaXR5PSIwLjA4Ii8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDxnIGlkPSJwcmVrc2hhLWxpdGUtYnJhbmQtbG9nbyIgZmlsdGVyPSJ1cmwoI3N1YnRsZS1jcmlzcC1zaGFkb3cpIj4KICAgIDwhLS0gU3R5bGl6ZWQgTW9ub2dyYW0gUCBBcnJvd2hlYWQgLS0+CiAgICA8cGF0aCBmaWxsPSIjZGI1MjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMjgsMTQKICBMIDE4OCwxMTAKICBMIDEyNiwxMTIKICBMIDEwMCw4OAogIEMgOTQsMTQyIDc4LDIxMCA0NCwyNzAKICBDIDQwLDI3NiAzMiwyNzQgMzAsMjY4CiAgQyAyMiwxODUgMjQsOTAgMjgsMTQKICBaCiAgTSA2NCw2MgogIEwgMTYwLDEwMAogIEwgODYsMTAwCiAgWiIvPgoKICAgIDwhLS0gcmVrc2hhIHRleHQgaW4gcHVyZSB2ZWN0b3IgcGF0aCAtLT4KICAgIDxwYXRoIGZpbGw9IiNkYjUyMDAiIGQ9Ik0xOTcuMTQgMjM3Ljg1UTE5NS40NiAyMzcuODUgMTk0LjQ1IDIzNy4zNFExOTMuNDQgMjM2Ljg0IDE5My4wMiAyMzUuNjZRMTkyLjYwIDIzNC40OSAxOTIuNjAgMjMyLjY0TDE5Mi42MCAxNjIuNThRMTkyLjYwIDE2MC41NyAxOTMuMDIgMTU5LjQ4UTE5My40NCAxNTguMzggMTk0LjQ1IDE1OC4wNVExOTUuNDYgMTU3LjcxIDE5Ny4zMCAxNTcuNzFRMTk4Ljk4IDE1Ny43MSAyMDAuMDggMTU4LjA1UTIwMS4xNyAxNTguMzggMjAxLjY3IDE1OS40OFEyMDIuMTggMTYwLjU3IDIwMi4xOCAxNjIuNThMMjAyLjE4IDE2OS42NFEyMDMuODYgMTY2Ljc4IDIwNS41NCAxNjQuNDNRMjA3LjIyIDE2Mi4wOCAyMDkuNTcgMTYwLjMyUTIxMS45MiAxNTguNTUgMjE1LjM2IDE1Ny41NFEyMTguODEgMTU2LjU0IDIyNC4wMiAxNTYuNTRRMjI2LjcwIDE1Ni41NCAyMjguOTcgMTU3LjA0UTIzMS4yNCAxNTcuNTQgMjMzLjE3IDE1OC4zOFEyMzUuMTAgMTU5LjIyIDIzNi40NSAxNjAuMjNRMjM3Ljc5IDE2MS4yNCAyMzguNDYgMTYyLjI1UTIzOS4xNCAxNjMuMjYgMjM5LjE0IDE2NC4yNlEyMzkuMTQgMTY2LjQ1IDIzNy4yOSAxNjcuOTZRMjM1LjQ0IDE2OS40NyAyMzMuOTMgMTY5LjQ3UTIzMi4wOCAxNjkuNDcgMjMxLjE2IDE2OC44OFEyMzAuMjMgMTY4LjMwIDIyOS4yMiAxNjcuNDZRMjI4LjIyIDE2Ni42MiAyMjYuMjAgMTY2LjAzUTIyNC4xOCAxNjUuNDQgMjE5Ljk4IDE2NS40NFEyMTcuNDYgMTY1LjQ0IDIxNC40NCAxNjYuNTNRMjExLjQyIDE2Ny42MiAyMDguNjQgMTY5LjgxUTIwNS44NyAxNzEuOTkgMjA0LjAyIDE3NS41MlEyMDIuMTggMTc5LjA1IDIwMi4xOCAxODMuOTJMMjAyLjE4IDIzMi45OFEyMDIuMTggMjM0LjgyIDIwMS43NiAyMzUuOTJRMjAxLjM0IDIzNy4wMSAyMDAuMjQgMjM3LjQzUTE5OS4xNSAyMzcuODUgMTk3LjE0IDIzNy44NU0yOTUuNzUgMjM4LjE4UTI4Ni41MSAyMzguMTggMjc4Ljg3IDIzNS4xNlEyNzEuMjIgMjMyLjE0IDI2NS43NiAyMjYuNTlRMjYwLjMwIDIyMS4wNSAyNTcuMjggMjEzLjQ5UTI1NC4yNiAyMDUuOTMgMjU0LjI2IDE5Ni42OVEyNTQuMjYgMTg1Ljc3IDI1OS40NiAxNzcuMDNRMjY0LjY3IDE2OC4zMCAyNzMuOTEgMTYzLjE3UTI4My4xNSAxNTguMDUgMjk1LjA4IDE1OC4wNVEzMDIuODEgMTU4LjA1IDMwOS4xOSAxNjAuNDBRMzE1LjU4IDE2Mi43NSAzMjAuMjggMTY2Ljc4UTMyNC45OCAxNzAuODIgMzI3LjU5IDE3Ni4wMlEzMzAuMTkgMTgxLjIzIDMzMC4xOSAxODYuNzhRMzMwLjE5IDE5NS4wMSAzMjYuNDEgMTk3Ljk1UTMyMi42MyAyMDAuODkgMzE3LjI2IDIwMC44OUwyNjQuMzQgMjAwLjg5UTI2NCAyMDkuNzkgMjY4Ljc5IDIxNi4xOFEyNzMuNTggMjIyLjU2IDI4MC44OCAyMjZRMjg4LjE5IDIyOS40NSAyOTUuNTggMjI5LjQ1UTMwMC40NiAyMjkuNDUgMzA0LjA3IDIyOC45NFEzMDcuNjggMjI4LjQ0IDMxMC4yOCAyMjcuNTJRMzEyLjg5IDIyNi41OSAzMTQuNzQgMjI1LjY3UTMxNi41OCAyMjQuNzQgMzE4LjEwIDIyMy44MlEzMTkuNjEgMjIyLjkwIDMyMC45NSAyMjIuMzlRMzIxLjc5IDIyMi4wNiAzMjIuODggMjIyLjE0UTMyMy45OCAyMjIuMjIgMzI0LjQ4IDIyMy4wNlEzMjUuMzIgMjI0LjI0IDMyNS42NiAyMjUuMTZRMzI1Ljk5IDIyNi4wOSAzMjUuOTkgMjI3LjI2UTMyNS45OSAyMjguNzggMzIxLjk2IDIzMS4zOFEzMTcuOTMgMjMzLjk4IDMxMS4wNCAyMzYuMDhRMzA0LjE1IDIzOC4xOCAyOTUuNzUgMjM4LjE4TTI2NC4zNCAxOTIuODJMMzE0LjQwIDE5Mi44MlEzMTcuNzYgMTkyLjgyIDMxOS42MSAxOTIuMDdRMzIxLjQ2IDE5MS4zMSAzMjEuNDYgMTg3LjExUTMyMS40NiAxODEuNTcgMzE4LjAxIDE3Ni45NVEzMTQuNTcgMTcyLjMzIDMwOC42OSAxNjkuNDdRMzAyLjgxIDE2Ni42MiAyOTUuMjUgMTY2LjYyUTI4Ni44NSAxNjYuNjIgMjc5LjcxIDE2OS45OFEyNzIuNTcgMTczLjM0IDI2OC4zNyAxNzkuMzBRMjY0LjE3IDE4NS4yNiAyNjQuMzQgMTkyLjgyTTM2Ni42NSAxOTUuODVMNDA5LjE1IDIyOS40NVE0MTEuNTAgMjMxLjEzIDQxMS42NyAyMzIuNTZRNDExLjg0IDIzMy45OCA0MTAuMzMgMjM2LjE3UTQwOS4xNSAyMzcuNjggNDA4LjA2IDIzOC4yN1E0MDYuOTcgMjM4Ljg2IDQwNS43OSAyMzguNTJRNDA0LjYyIDIzOC4xOCA0MDMuMTAgMjM3LjAxTDM1OS40MiAyMDIuMjNMMzU5LjQyIDIzMi44MVEzNTkuNDIgMjM0LjY2IDM1OC45MiAyMzUuNzVRMzU4LjQyIDIzNi44NCAzNTcuNDEgMjM3LjM0UTM1Ni40MCAyMzcuODUgMzU0LjU1IDIzNy44NVEzNTIuODcgMjM3Ljg1IDM1MS43OCAyMzcuMzRRMzUwLjY5IDIzNi44NCAzNTAuMjcgMjM1LjY2UTM0OS44NSAyMzQuNDkgMzQ5Ljg1IDIzMi42NEwzNDkuODUgMTI1LjYyUTM0OS44NSAxMjMuNzggMzUwLjM1IDEyMi42OFEzNTAuODYgMTIxLjU5IDM1MS45NSAxMjEuMDlRMzUzLjA0IDEyMC41OCAzNTQuNzIgMTIwLjU4UTM1Ni41NyAxMjAuNTggMzU3LjU4IDEyMS4wOVEzNTguNTggMTIxLjU5IDM1OSAxMjIuNjhRMzU5LjQyIDEyMy43OCAzNTkuNDIgMTI1Ljc5TDM1OS40MiAxODkuNjNMMzkxLjY4IDE1OC43MlEzOTIuODYgMTU3LjU0IDM5NC4wMyAxNTcuMDRRMzk1LjIxIDE1Ni41NCAzOTYuMzggMTU2Ljc5UTM5Ny41NiAxNTcuMDQgMzk4Ljc0IDE1OC41NVE0MDAuNTggMTYwLjc0IDQwMC41MCAxNjIuMjVRNDAwLjQyIDE2My43NiAzOTguNDAgMTY1LjYxTDM2Ni42NSAxOTUuODVNNDU2LjUzIDIzOC4zNVE0NTIuNjYgMjM4LjM1IDQ0OC43MiAyMzcuNjBRNDQ0Ljc3IDIzNi44NCA0NDEuMTYgMjM1LjQxUTQzNy41NCAyMzMuOTggNDM0LjUyIDIzMi4wNVE0MzEuNTAgMjMwLjEyIDQyOS42NSAyMjcuNzdRNDI4LjQ3IDIyNi4wOSA0MjcuOTcgMjI0LjkxUTQyNy40NiAyMjMuNzQgNDI3Ljg4IDIyMi43M1E0MjguMzAgMjIxLjcyIDQyOS40OCAyMjAuODhRNDMxLjMzIDIxOC44NiA0MzMuMDEgMjE5LjIwUTQzNC42OSAyMTkuNTQgNDM3LjM4IDIyMi4zOVE0MzguODkgMjI0LjA3IDQ0MS4yNCAyMjUuNTBRNDQzLjU5IDIyNi45MyA0NDYuMjggMjI3Ljk0UTQ0OC45NyAyMjguOTQgNDUxLjY2IDIyOS40NVE0NTQuMzQgMjI5Ljk1IDQ1Ni43MCAyMjkuOTVRNDY1Ljk0IDIyOS45NSA0NzEuNjUgMjI2LjM0UTQ3Ny4zNiAyMjIuNzMgNDc3LjM2IDIxNi41MVE0NzcuMzYgMjEzLjMyIDQ3Ni4xOCAyMTAuODhRNDc1LjAxIDIwOC40NSA0NzIuOTkgMjA2Ljc3UTQ3MC45OCAyMDUuMDkgNDY4LjM3IDIwMy44M1E0NjUuNzcgMjAyLjU3IDQ2Mi42NiAyMDEuNjRRNDU5LjU1IDIwMC43MiA0NTYuMzYgMTk5Ljg4UTQ1MS42NiAxOTguNzAgNDQ3LjA0IDE5Ny4yOFE0NDIuNDIgMTk1Ljg1IDQzOC43MiAxOTMuNjZRNDM1LjAyIDE5MS40OCA0MzIuNzYgMTg3Ljk1UTQzMC40OSAxODQuNDIgNDMwLjQ5IDE3OC44OFE0MzAuNDkgMTcyLjUwIDQzMy43NiAxNjcuNzlRNDM3LjA0IDE2My4wOSA0NDIuOTIgMTYwLjQwUTQ0OC44MCAxNTcuNzEgNDU2LjUzIDE1Ny43MVE0NjAuMzkgMTU3LjcxIDQ2My43NSAxNTguMzBRNDY3LjExIDE1OC44OSA0NzAuMDUgMTYwLjA2UTQ3Mi45OSAxNjEuMjQgNDc1LjYwIDE2Mi44NFE0NzguMjAgMTY0LjQzIDQ4MC4zOCAxNjYuNjJRNDgyLjQwIDE2OC40NiA0ODIuNTcgMTY5Ljk4UTQ4Mi43NCAxNzEuNDkgNDgxLjM5IDE3My4xN1E0NzkuODggMTc0Ljg1IDQ3OC4yMCAxNzUuMTBRNDc2LjUyIDE3NS4zNSA0NzQuNjcgMTczLjUwUTQ3MS45OCAxNzAuODIgNDY5LjA0IDE2OS4yMlE0NjYuMTAgMTY3LjYyIDQ2MyAxNjYuNzhRNDU5Ljg5IDE2NS45NCA0NTYuNTMgMTY1Ljk0UTQ1MS42NiAxNjUuOTQgNDQ3Ljc5IDE2Ny41NFE0NDMuOTMgMTY5LjE0IDQ0MS44MyAxNzIuMDhRNDM5LjczIDE3NS4wMiA0MzkuNzMgMTc4Ljg4UTQzOS43MyAxODEuNzQgNDQxLjE2IDE4My42N1E0NDIuNTggMTg1LjYwIDQ0NC45NCAxODYuOTRRNDQ3LjI5IDE4OC4yOSA0NTAuNDggMTg5LjMwUTQ1My42NyAxOTAuMzAgNDU3LjIwIDE5MS4zMVE0NjIuMjQgMTkyLjY2IDQ2Ny40NSAxOTQuMjVRNDcyLjY2IDE5NS44NSA0NzYuOTQgMTk4LjQ1UTQ4MS4yMiAyMDEuMDYgNDgzLjkxIDIwNS4yNlE0ODYuNjAgMjA5LjQ2IDQ4Ni42MCAyMTYuMThRNDg2LjYwIDIyNi4yNiA0NzguMTIgMjMyLjMwUTQ2OS42MyAyMzguMzUgNDU2LjUzIDIzOC4zNU01MTEuNjMgMjM3Ljg1UTUwOS43OCAyMzcuODUgNTA4LjY5IDIzNy4zNFE1MDcuNjAgMjM2Ljg0IDUwNy4xOCAyMzUuNjZRNTA2Ljc2IDIzNC40OSA1MDYuNzYgMjMyLjY0TDUwNi43NiAxMjUuNjJRNTA2Ljc2IDEyMy43OCA1MDcuMjYgMTIyLjY4UTUwNy43NyAxMjEuNTkgNTA4Ljg2IDEyMS4wOVE1MDkuOTUgMTIwLjU4IDUxMS44MCAxMjAuNThRNTEzLjY1IDEyMC41OCA1MTQuNzQgMTIxLjA5UTUxNS44MyAxMjEuNTkgNTE2LjI1IDEyMi42OFE1MTYuNjcgMTIzLjc4IDUxNi42NyAxMjUuNzlMNTE2LjY3IDE3MC45OFE1MjEuMDQgMTY1LjYxIDUyNy4zNCAxNjEuNDlRNTMzLjY0IDE1Ny4zOCA1NDMuMDUgMTU3LjM4UTU1Mi42MiAxNTcuMzggNTYwLjE4IDE2MS42NlE1NjcuNzQgMTY1Ljk0IDU3Mi4yMCAxNzMuOTJRNTc2LjY1IDE4MS45MCA1NzYuNjUgMTkzLjMzTDU3Ni42NSAyMzIuODFRNTc2LjY1IDIzNC42NiA1NzYuMjMgMjM1Ljc1UTU3NS44MSAyMzYuODQgNTc0LjgwIDIzNy4yNlE1NzMuNzkgMjM3LjY4IDU3MS45NCAyMzcuNjhRNTcwLjEwIDIzNy42OCA1NjkgMjM3LjE4UTU2Ny45MSAyMzYuNjcgNTY3LjQ5IDIzNS41OFE1NjcuMDcgMjM0LjQ5IDU2Ny4wNyAyMzIuNjRMNTY3LjA3IDE5My4xNlE1NjcuMDcgMTg0LjkzIDU2NC4zOCAxNzguODhRNTYxLjcwIDE3Mi44MyA1NTYuMzIgMTY5LjQ3UTU1MC45NCAxNjYuMTEgNTQyLjcxIDE2Ni4xMVE1MzEuNDYgMTY2LjExIDUyNC41NyAxNzIuNTBRNTE3LjY4IDE3OC44OCA1MTYuNjcgMTg5LjYzTDUxNi42NyAyMzIuODFRNTE2LjY3IDIzNC42NiA1MTYuMTcgMjM1Ljc1UTUxNS42NiAyMzYuODQgNTE0LjU3IDIzNy4zNFE1MTMuNDggMjM3Ljg1IDUxMS42MyAyMzcuODVNNjY2LjE5IDIzNy42OFE2NjMuODQgMjM3LjY4IDY2Mi44MyAyMzYuNTBRNjYxLjgyIDIzNS4zMyA2NjEuNDkgMjMyLjE0TDY2MS40OSAyMjAuODhRNjU5LjY0IDIyNC4wNyA2NTUuNjkgMjI4LjAyUTY1MS43NCAyMzEuOTcgNjQ1LjQ0IDIzNC45MVE2MzkuMTQgMjM3Ljg1IDYzMC4yNCAyMzcuODVRNjIyLjAxIDIzNy44NSA2MTUuMDQgMjM0Ljc0UTYwOC4wNiAyMzEuNjMgNjAyLjg2IDIyNi4wOVE1OTcuNjUgMjIwLjU0IDU5NC43MSAyMTMuMjRRNTkxLjc3IDIwNS45MyA1OTEuNzcgMTk3LjM2UTU5MS43NyAxODkuMTMgNTk0LjcxIDE4MS45OVE1OTcuNjUgMTc0Ljg1IDYwMi45NCAxNjkuMzlRNjA4LjIzIDE2My45MyA2MTUuMjAgMTYwLjgyUTYyMi4xOCAxNTcuNzEgNjMwLjI0IDE1Ny43MVE2MzguMTQgMTU3LjcxIDY0My43NiAxNTkuNzNRNjQ5LjM5IDE2MS43NCA2NTMuNjggMTY1LjI3UTY1Ny45NiAxNjguODAgNjYxLjQ5IDE3My41MEw2NjEuNDkgMTYzLjkzUTY2MS40OSAxNjAuNTcgNjYyLjU4IDE1OS4xNFE2NjMuNjcgMTU3LjcxIDY2Ni4zNiAxNTcuNzFRNjY4LjA0IDE1Ny43MSA2NjguOTYgMTU4LjMwUTY2OS44OSAxNTguODkgNjcwLjMxIDE2MC4yM1E2NzAuNzMgMTYxLjU4IDY3MC43MyAxNjMuOTNMNjcwLjczIDIzMi4xNFE2NzAuNzMgMjM0LjE1IDY3MC4zMSAyMzUuNDFRNjY5Ljg5IDIzNi42NyA2NjguODggMjM3LjE4UTY2Ny44NyAyMzcuNjggNjY2LjE5IDIzNy42OE02MzIuMDkgMjI5LjExUTY0MC4xNSAyMjkuMTEgNjQ2LjcwIDIyNVE2NTMuMjYgMjIwLjg4IDY1Ny4xMiAyMTMuODJRNjYwLjk4IDIwNi43NyA2NjAuOTggMTk3LjcwUTY2MC45OCAxODguMTIgNjU2Ljk1IDE4MS4wNlE2NTIuOTIgMTc0LjAxIDY0Ni4yOCAxNzAuMDZRNjM5LjY1IDE2Ni4xMSA2MzEuNzUgMTY2LjExUTYyMi41MSAxNjYuMTEgNjE1LjYyIDE3MC4zMVE2MDguNzQgMTc0LjUxIDYwNC44NyAxODEuNjVRNjAxLjAxIDE4OC43OSA2MDEuMDEgMTk4LjAzUTYwMS4wMSAyMDYuOTQgNjA0Ljg3IDIxMy45OVE2MDguNzQgMjIxLjA1IDYxNS43OSAyMjUuMDhRNjIyLjg1IDIyOS4xMSA2MzIuMDkgMjI5LjExIi8+CgogICAgPCEtLSBMaXRlIGluIHB1cmUgY3Vyc2l2ZSBzY3JpcHQgLS0+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdlYzciIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICA8IS0tIEN1cnNpdmUgQ2FwaXRhbCBMIC0tPgogICAgPHBhdGggZD0iCiAgICAgIE0gNzE4LDEzNQogICAgICBDIDcwNiw5OCA3MTgsNjIgNzQ0LDYyCiAgICAgIEMgNzYyLDYyIDc2OCw5MCA3NTgsMTMwCiAgICAgIEMgNzQ2LDE4MCA3MzAsMjE1IDcxMiwyMjYKICAgICAgQyA2OTgsMjM0IDY5NCwyMTYgNzA2LDIxMAogICAgICBDIDcxOCwyMDQgNzQwLDIyOCA3ODAsMjI4CiAgICAgIEMgNzk2LDIyOCA4MTIsMjI2IDgyNCwyMjIKICAgICIvPgogICAgCiAgICA8IS0tIGkgLS0+CiAgICA8cGF0aCBkPSIKICAgICAgTSA4NDAsMTU4CiAgICAgIEwgODU1LDIyNQogICAgICBDIDg1OCwyMzMgODY4LDIzNCA4NzYsMjI2CiAgICAiLz4KICAgIAogICAgPCEtLSB0IC0tPgogICAgPHBhdGggZD0iCiAgICAgIE0gOTAyLDk2CiAgICAgIEwgOTE2LDIyNQogICAgICBDIDkxOSwyMzQgOTMwLDIzNSA5NDAsMjI1CiAgICAiLz4KICAgIDxwYXRoIGQ9IgogICAgICBNIDg5MCwxNTgKICAgICAgTCA5MzIsMTU0CiAgICAiLz4KICAgIAogICAgPCEtLSBlIC0tPgogICAgPHBhdGggZD0iCiAgICAgIE0gOTU4LDIwNgogICAgICBDIDk2NSwxNzIgOTc2LDE1NSA5OTIsMTU1CiAgICAgIEMgMTAwOCwxNTUgMTAxMiwxNzIgOTk4LDE5MAogICAgICBDIDk4MiwyMTIgOTY4LDIzMCA5OTQsMjMwCiAgICAgIEMgMTAxMCwyMzAgMTAyMiwyMjIgMTAzMiwyMTIKICAgICIvPgogIDwvZz4KICA8IS0tIGkgZG90IC0tPgogIDxjaXJjbGUgY3g9Ijg0OCIgY3k9IjEyMiIgcj0iOSIgZmlsbD0iIzAwN2VjNyIvPgogIDwvZz4KPC9zdmc+";

function applyLogoFallbacks() {
  const logos = document.querySelectorAll("img[id*='Logo'], img[src*='logo']");
  logos.forEach(img => {
    img.addEventListener('error', function() {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = 'true';
      this.src = PREKSHA_LOGO_FALLBACK;
    });
    // If already broken
    if (img.complete && img.naturalWidth === 0 && img.src && !img.dataset.fallbackApplied) {
      img.dataset.fallbackApplied = 'true';
      img.src = PREKSHA_LOGO_FALLBACK;
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLogoFallbacks);
} else {
  applyLogoFallbacks();
}


// Rotating Cities List
const ROTATING_CITIES = [
  "Chennai",
  "Vijayawada",
  "Hyderabad",
  "Bengaluru",
  "Coimbatore",
  "Pune",
  "Mumbai",
  "Visakhapatnam",
  "Tirupati",
  "Madurai"
];

// Dynamic Site Configuration Engine
let currentSiteConfig = {
  companyName: "PREKSHA LIGHTING WORLD",
  companyTagline: "Premium Lighting Solutions",
  companyLogoUrl: "images/preksha-lite-logo.svg",
  whatsappNumber: "917010114070",
  phoneNumber: "+91 70101 14070",
  emailAddress: "nsr8i@outlook.com",
  headquartersAddress: "Chennai, India",
  servingCities: "Chennai, Vijayawada, Hyderabad, Bengaluru, Coimbatore, Pune, Mumbai, Visakhapatnam, Tirupati, Madurai",
  
  heroTaglineBadge: "",
  heroHeading: "Light Your Space With Style",
  heroDescription: "Premium decorative and architectural lighting solutions for homes, shops, offices and modern spaces.",
  heroPrimaryBtnText: "Explore Products",
  heroSecondaryBtnText: "Contact Us",
  heroBackdropPhoto: "images/opera gate light.jpeg",
  
  aboutSectionTag: "ABOUT PREKSHA",
  aboutHeading: "Lighting That Makes A Difference",
  aboutDescription: "PREKSHA LIGHTING WORLD provides premium lighting solutions designed to bring beauty, functionality and character to every space.",
  aboutBadge: "Luxury Lighting World",
  aboutImageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
  aboutMediaUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
  aboutMediaType: "image",
  aboutVideoAutoplay: true,
  aboutVideoLoop: true,
  aboutVideoMuted: true,
  aboutVideoControls: true,
  aboutFeat1Title: "Architectural Craft",
  aboutFeat1Text: "Precision optical diffusers and premium metal finishes.",
  aboutFeat2Title: "Ultra Efficiency",
  aboutFeat2Text: "High-lumen Grade-A LED chips with long lifespan.",
  aboutFeat3Title: "Custom Lighting",
  aboutFeat3Text: "Bespoke lighting consultations for villas and retail.",
  aboutFeat4Title: "Pan-India Reach",
  aboutFeat4Text: "Fast, insured delivery with personalized support.",
  
  whyTag: "THE PREKSHA PROMISE",
  whyTitle: "Why Choose Us",
  whySubtitle: "Dedicated to transforming spaces with uncompromised quality and architectural lighting brilliance.",
  whyCard1Title: "Premium Quality",
  whyCard1Desc: "Finest grade materials, weather-resistant coatings, and high-efficiency LED drivers engineered for excellence.",
  whyCard2Title: "Wide Collection",
  whyCard2Desc: "From grand royal chandeliers and ambient pendants to gate lights, elevation fixtures, and seamless COB profiles.",
  whyCard3Title: "Reliable Service",
  whyCard3Desc: "Expert consultations, reliable order dispatch, responsive support, and transparent communication every step.",
  whyCard4Title: "Modern Designs",
  whyCard4Desc: "Curated contemporary designs that harmoniously accentuate modern residences, boutique cafes, and commercial spaces.",
  
  ctaTitle: "Looking For The Right Light?",
  ctaText: "Contact us for product details and enquiries.",
  ctaBtn: "Get In Touch",
  footerCopyright: "© 2026 PREKSHA LIGHTING WORLD. All Rights Reserved. Premium LED lighting solutions.",
  
  customSupabaseUrl: "",
  customSupabaseKey: ""
};

let activeCitiesList = [...ROTATING_CITIES];
let activeWhatsappNumber = WHATSAPP_NUMBER;

// Fallback Categories (Genuine core architectural lighting collections)
const FALLBACK_CATEGORIES = [
  { id: "c0000000-0000-4000-a000-000000000001", name: "Gate Lights", slug: "gate-lights", description: "Pillar and entrance lanterns.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg", sort_order: 1 },
  { id: "c0000000-0000-4000-a000-000000000002", name: "Elevation Lights", slug: "elevation-lights", description: "Facade and exterior wall accent fixtures.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1789626815368-hcknfkiz9hp.jpeg", sort_order: 2 },
  { id: "c0000000-0000-4000-a000-000000000003", name: "Hanging Lights", slug: "hanging-lights", description: "Modern pendant luminaires for dining & islands.", image_url: "images/wood hanging light.jpeg", sort_order: 3 },
  { id: "c0000000-0000-4000-a000-000000000004", name: "Chandeliers", slug: "chandeliers", description: "Grand luxury statement pieces.", image_url: "images/chandelier gold.jpeg", sort_order: 4 },
  { id: "cc5e088a-68f2-4056-b822-8f04e0d26e75", name: "LED WALL LIGHTS", slug: "led-wall-lights", description: "Beautiful wall Lights and sconces.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/categories/1790339256880-omlmrn7.jpeg", sort_order: 5 }
];

// Fallback Products for each category to ensure complete browsing experience
const FALLBACK_PRODUCTS = [
  {
    id: "9e8667ae-ec26-4baf-af48-42554404e5aa",
    name: "ANTIQUE GATE LAMP",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Premium architectural gate lamp with durable weather-resistant finish.",
    price: "₹ 900",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg",
    sort_order: 1
  },
  {
    id: "80ed80a2-6e52-4ee8-9dc0-e044c5bec96e",
    name: "elevation",
    category: "Elevation Lights",
    category_slug: "elevation-lights",
    description: "Dual-beam architectural exterior facade lighting.",
    price: "₹ 1,850",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1789626815368-hcknfkiz9hp.jpeg",
    sort_order: 2
  }
];

// Fallback SVG data generator for missing images
function getSvgFallback(title, type) {
  const t = (type || title || "").toLowerCase();
  let iconSvg = `<circle cx="100" cy="100" r="35" fill="#fcebc2" opacity="0.8"/><circle cx="100" cy="100" r="18" fill="#e56712"/>`;
  if (t.includes("jhoom") || t.includes("chan")) {
    iconSvg = `<path d="M100 20 L100 60 M60 60 L140 60 M40 90 L160 90 M70 130 L130 130" stroke="#d6aa45" stroke-width="3"/><circle cx="100" cy="150" r="10" fill="#e56712"/><circle cx="60" cy="90" r="6" fill="#d6aa45"/><circle cx="140" cy="90" r="6" fill="#d6aa45"/>`;
  } else if (t.includes("hang") || t.includes("wood")) {
    iconSvg = `<path d="M100 15 L100 70" stroke="#080808" stroke-width="3"/><path d="M55 120 C55 80 145 80 145 120 Z" fill="#2a2318" stroke="#d6aa45" stroke-width="3"/><circle cx="100" cy="120" r="20" fill="#ffd875"/>`;
  } else if (t.includes("strip") || t.includes("cob")) {
    iconSvg = `<rect x="30" y="90" width="140" height="20" rx="10" fill="#1a1a1a" stroke="#d6aa45" stroke-width="2"/><circle cx="55" cy="100" r="5" fill="#ffb443"/><circle cx="85" cy="100" r="5" fill="#ffb443"/><circle cx="115" cy="100" r="5" fill="#ffb443"/><circle cx="145" cy="100" r="5" fill="#ffb443"/>`;
  } else if (t.includes("elev") || t.includes("facade")) {
    iconSvg = `<rect x="75" y="40" width="50" height="120" rx="4" fill="#181818" stroke="#d6aa45" stroke-width="3"/><polygon points="100,40 60,10 140,10" fill="#ffd777" opacity="0.7"/><polygon points="100,160 50,190 150,190" fill="#ffd777" opacity="0.7"/>`;
  } else if (t.includes("moon")) {
    iconSvg = `<circle cx="100" cy="100" r="55" fill="#fff" stroke="#d6aa45" stroke-width="3"/><circle cx="120" cy="90" r="45" fill="#faf6ec"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="400" height="400">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="80%" stop-color="#f5f0e6"/>
        <stop offset="100%" stop-color="#ebe3d3"/>
      </radialGradient>
    </defs>
    <rect width="200" height="200" rx="12" fill="url(#g)"/>
    <circle cx="100" cy="100" r="70" fill="#ffd875" opacity="0.25"/>
    ${iconSvg}
    <text x="100" y="186" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" fill="#666" letter-spacing="1.2">${(title || 'PREKSHA LIGHT').toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Global Application State
let appState = {
  categories: [],
  products: [],
  currentHeroCategoryIndex: 0,
  heroInterval: null,
  currentCityIndex: 0,
  cityInterval: null,
  savedHeroVideoSrc: "",
  activeCategory: null,
  activeCategoryProducts: [],
  currentModalIndex: 0
};

/**
 * Ensures any uploaded or configured logo seamlessly matches the website
 * (transparent background, never solid black rectangle).
 */
function ensureLogoWebsiteMatching(img) {
  if (!img) return;
  
  const checkAndClean = () => {
    try {
      if (!img.src || img.src.includes(".svg") || img.dataset.bgCleaned === "true") return;
      
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      
      const w = img.naturalWidth || img.width || 200;
      const h = img.naturalHeight || img.height || 60;
      if (w <= 0 || h <= 0) return;
      
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      
      // Sample 4 corners
      const corners = [
        0,
        (w - 1) * 4,
        ((h - 1) * w) * 4,
        (((h - 1) * w) + (w - 1)) * 4
      ];
      
      let darkCorners = 0;
      let opaqueCorners = 0;
      for (const idx of corners) {
        const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
        if (a > 60) {
          opaqueCorners++;
          if (r < 50 && g < 50 && b < 50) {
            darkCorners++;
          }
        }
      }
      
      // If corners are opaque black/dark, convert black background to transparent
      if (opaqueCorners >= 2 && darkCorners >= 2) {
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
          if (a > 0) {
            const maxVal = Math.max(r, g, b);
            if (maxVal < 45) {
              data[i + 3] = 0; // Completely transparent
            } else if (maxVal < 80) {
              data[i + 3] = Math.round(((maxVal - 45) / 35) * a); // Smooth fade
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
        const cleanPng = canvas.toDataURL("image/png");
        img.dataset.bgCleaned = "true";
        img.src = cleanPng;
        
        // Update stored logo in config if it was a dark-background dataUrl
        try {
          const saved = localStorage.getItem("preksha_site_config");
          if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.companyLogoUrl && parsed.companyLogoUrl.startsWith("data:image")) {
              parsed.companyLogoUrl = cleanPng;
              localStorage.setItem("preksha_site_config", JSON.stringify(parsed));
            }
          }
        } catch (e) {}
      } else {
        img.dataset.bgCleaned = "true";
      }
    } catch (err) {
      // Cross-origin fallback
    }
  };

  if (img.complete && img.naturalWidth > 0) {
    checkAndClean();
  } else {
    img.addEventListener("load", checkAndClean, { once: true });
  }
}

/**
 * Load and Apply Dynamic Site Configuration (CMS Integration)
 */
function loadAndApplySiteConfig() {
  try {
    const savedConfig = localStorage.getItem("preksha_site_config");
    if (savedConfig) {
      const parsed = JSON.parse(savedConfig);
      // Purge any stale "GATE LIGHT" badge from saved config
      if (parsed.heroTaglineBadge && (parsed.heroTaglineBadge.toUpperCase().includes("GATE LIGHT") || parsed.heroTaglineBadge.trim() === "GATE LIGHT COLLECTION")) {
        delete parsed.heroTaglineBadge;
        localStorage.setItem("preksha_site_config", JSON.stringify(parsed));
      }
      // Migrate old PNG logo to crisp transparent SVG
      if (parsed.companyLogoUrl === "images/preksha-lite-logo.png") {
        parsed.companyLogoUrl = "images/preksha-lite-logo.svg";
        localStorage.setItem("preksha_site_config", JSON.stringify(parsed));
      }
      currentSiteConfig = { ...currentSiteConfig, ...parsed };
    }
  } catch (err) {
    console.warn("Could not parse saved site config:", err);
  }

  const c = currentSiteConfig;

  // 1. Company Name & Page Title
  if (c.companyName) {
    document.title = `${c.companyName} | ${c.companyTagline || 'Showroom'}`;
    const brandEls = document.querySelectorAll(".category-page-brand, .admin-badge-company");
    brandEls.forEach(el => el.textContent = c.companyName);
  }

  // 2. Company Logo Across All Navigation & Footers
  if (c.companyLogoUrl) {
    const logos = document.querySelectorAll("#mainHeaderLogo, #categoryHeaderLogo, #footerLogo, #categoryFooterLogo, .header-logo img");
    logos.forEach(img => {
      if (img) {
        img.src = c.companyLogoUrl;
        img.alt = c.companyName || "Company Logo";
        ensureLogoWebsiteMatching(img);
      }
    });
  }

  // 3. WhatsApp & Contact Info
  if (c.whatsappNumber) {
    activeWhatsappNumber = c.whatsappNumber.toString().replace(/[^0-9]/g, "");
    const floatingWa = document.getElementById("floatingWhatsapp");
    if (floatingWa) {
      floatingWa.href = `https://wa.me/${activeWhatsappNumber}?text=${encodeURIComponent(`Hello ${c.companyName || 'Team'}, I would like to enquire about your products.`)}`;
      floatingWa.setAttribute("aria-label", `Chat with ${c.companyName} on WhatsApp`);
    }
  }

  const contactPhone = document.getElementById("contactPhoneVal");
  if (contactPhone && c.phoneNumber) contactPhone.textContent = c.phoneNumber;

  const contactEmail = document.getElementById("contactEmailVal");
  if (contactEmail && c.emailAddress) contactEmail.textContent = c.emailAddress;

  const contactAddr = document.getElementById("contactAddressVal");
  if (contactAddr && c.headquartersAddress) contactAddr.textContent = c.headquartersAddress;

  // 4. Hero Section - Ensure no Gate Light Collection heading or lingering badge exists
  const heroTaglineBadge = document.getElementById("heroTaglineBadge");
  if (heroTaglineBadge) {
    if (c.heroTaglineBadge && !c.heroTaglineBadge.toUpperCase().includes("GATE LIGHT")) {
      heroTaglineBadge.textContent = c.heroTaglineBadge;
    } else {
      heroTaglineBadge.remove();
    }
  }

  const lingeringCategoryBadge = document.getElementById("heroCategoryBadge");
  if (lingeringCategoryBadge) {
    lingeringCategoryBadge.remove();
  }

  const heroHeading = document.getElementById("heroHeading");
  if (heroHeading && c.heroHeading) {
    heroHeading.textContent = c.heroHeading;
  }

  const heroDesc = document.getElementById("heroDescription");
  if (heroDesc && c.heroDescription) heroDesc.textContent = c.heroDescription;

  const heroPrimaryBtn = document.getElementById("heroPrimaryBtn");
  if (heroPrimaryBtn && c.heroPrimaryBtnText) heroPrimaryBtn.textContent = c.heroPrimaryBtnText;

  const heroSecondaryBtn = document.getElementById("heroSecondaryBtn");
  if (heroSecondaryBtn && c.heroSecondaryBtnText) heroSecondaryBtn.textContent = c.heroSecondaryBtnText;

  // 5. About Section (Supports Video and Photo)
  const aboutImage = document.getElementById("aboutImage");
  const aboutVideo = document.getElementById("aboutVideo");
  const aboutMediaUrl = c.aboutMediaUrl || c.aboutImageUrl;
  const isVideo = c.aboutMediaType === "video" || 
    (typeof aboutMediaUrl === "string" && (
      aboutMediaUrl.includes("video/") ||
      aboutMediaUrl.endsWith(".mp4") ||
      aboutMediaUrl.endsWith(".webm") ||
      aboutMediaUrl.endsWith(".mov") ||
      aboutMediaUrl.endsWith(".ogg") ||
      aboutMediaUrl.startsWith("data:video/") ||
      aboutMediaUrl.startsWith("blob:")
    ));

  if (isVideo && aboutMediaUrl) {
    if (aboutImage) aboutImage.style.display = "none";
    if (aboutVideo) {
      if (aboutVideo.src !== aboutMediaUrl) {
        aboutVideo.src = aboutMediaUrl;
      }
      aboutVideo.style.display = "block";
      aboutVideo.autoplay = c.aboutVideoAutoplay !== false;
      aboutVideo.muted = c.aboutVideoMuted !== false;
      aboutVideo.loop = c.aboutVideoLoop !== false;
      aboutVideo.controls = c.aboutVideoControls !== false;
      aboutVideo.playsInline = true;
      aboutVideo.play().catch(() => {});
    }
  } else {
    if (aboutVideo) {
      aboutVideo.style.display = "none";
      aboutVideo.pause();
    }
    if (aboutImage) {
      aboutImage.style.display = "block";
      if (aboutMediaUrl) aboutImage.src = aboutMediaUrl;
    }
  }

  const aboutBadge = document.getElementById("aboutBadge");
  if (aboutBadge && c.aboutBadge) aboutBadge.textContent = c.aboutBadge;

  const aboutSectionTag = document.getElementById("aboutSectionTag");
  if (aboutSectionTag && c.aboutSectionTag) aboutSectionTag.textContent = c.aboutSectionTag;

  const aboutHeading = document.getElementById("aboutHeading");
  if (aboutHeading && c.aboutHeading) aboutHeading.textContent = c.aboutHeading;

  const aboutDesc = document.getElementById("aboutDescription");
  if (aboutDesc && c.aboutDescription) aboutDesc.textContent = c.aboutDescription;

  const f1t = document.getElementById("aboutFeat1Title");
  if (f1t && c.aboutFeat1Title) f1t.textContent = c.aboutFeat1Title;
  const f1d = document.getElementById("aboutFeat1Text");
  if (f1d && c.aboutFeat1Text) f1d.textContent = c.aboutFeat1Text;

  const f2t = document.getElementById("aboutFeat2Title");
  if (f2t && c.aboutFeat2Title) f2t.textContent = c.aboutFeat2Title;
  const f2d = document.getElementById("aboutFeat2Text");
  if (f2d && c.aboutFeat2Text) f2d.textContent = c.aboutFeat2Text;

  const f3t = document.getElementById("aboutFeat3Title");
  if (f3t && c.aboutFeat3Title) f3t.textContent = c.aboutFeat3Title;
  const f3d = document.getElementById("aboutFeat3Text");
  if (f3d && c.aboutFeat3Text) f3d.textContent = c.aboutFeat3Text;

  const f4t = document.getElementById("aboutFeat4Title");
  if (f4t && c.aboutFeat4Title) f4t.textContent = c.aboutFeat4Title;
  const f4d = document.getElementById("aboutFeat4Text");
  if (f4d && c.aboutFeat4Text) f4d.textContent = c.aboutFeat4Text;

  // 6. Why Us Section
  const whyTag = document.getElementById("whyUsTag");
  if (whyTag && c.whyTag) whyTag.textContent = c.whyTag;

  const whyTitle = document.getElementById("whyUsTitle");
  if (whyTitle && c.whyTitle) whyTitle.textContent = c.whyTitle;

  const whySub = document.getElementById("whyUsSubtitle");
  if (whySub && c.whySubtitle) whySub.textContent = c.whySubtitle;

  const w1t = document.getElementById("whyCard1Title");
  if (w1t && c.whyCard1Title) w1t.textContent = c.whyCard1Title;
  const w1d = document.getElementById("whyCard1Desc");
  if (w1d && c.whyCard1Desc) w1d.textContent = c.whyCard1Desc;

  const w2t = document.getElementById("whyCard2Title");
  if (w2t && c.whyCard2Title) w2t.textContent = c.whyCard2Title;
  const w2d = document.getElementById("whyCard2Desc");
  if (w2d && c.whyCard2Desc) w2d.textContent = c.whyCard2Desc;

  const w3t = document.getElementById("whyCard3Title");
  if (w3t && c.whyCard3Title) w3t.textContent = c.whyCard3Title;
  const w3d = document.getElementById("whyCard3Desc");
  if (w3d && c.whyCard3Desc) w3d.textContent = c.whyCard3Desc;

  const w4t = document.getElementById("whyCard4Title");
  if (w4t && c.whyCard4Title) w4t.textContent = c.whyCard4Title;
  const w4d = document.getElementById("whyCard4Desc");
  if (w4d && c.whyCard4Desc) w4d.textContent = c.whyCard4Desc;

  // 7. CTA Section
  const ctaTitle = document.getElementById("ctaTitle");
  if (ctaTitle && c.ctaTitle) ctaTitle.textContent = c.ctaTitle;

  const ctaText = document.getElementById("ctaText");
  if (ctaText && c.ctaText) ctaText.textContent = c.ctaText;

  const ctaBtn = document.getElementById("ctaBtn");
  if (ctaBtn && c.ctaBtn) ctaBtn.textContent = c.ctaBtn;

  // 8. Footer Copyright
  const footerCopyright = document.getElementById("footerCopyright");
  if (footerCopyright && c.footerCopyright) footerCopyright.textContent = c.footerCopyright;

  // 9. Serving Cities
  if (c.servingCities) {
    const list = c.servingCities.split(",").map(s => s.trim()).filter(Boolean);
    if (list.length > 0) {
      activeCitiesList = list;
      const cityCount = document.getElementById("footerCityCount");
      if (cityCount) cityCount.textContent = `${list.length}+`;
    }
  }
}

// Application Initialization
async function initStorefrontApp() {
  loadAndApplySiteConfig();
  initBrandLogo();
  initVideoSourcePreservation();
  initHamburgerMenus();
  initContactForm();
  initRotatingCities();
  initModalListeners();
  initAdminPanel();

  // Load Data from Supabase with Fallbacks
  await loadAppData();

  // Re-apply site config after data loading
  loadAndApplySiteConfig();

  // Setup Dynamic Sections
  setupHeroCategorySlider();
  renderHomepageCategories();
  renderHomepageFeaturedProducts();
  updateFooterStatistics();
  initPWAFeatures();

  // Listen to cross-tab updates from separate admin panel
  window.addEventListener("storage", function (e) {
    if (!e.key || e.key === "preksha_site_config") {
      loadAndApplySiteConfig();
    }
    if (!e.key || e.key === "preksha_deleted_categories" || e.key === "preksha_custom_categories" || e.key === "preksha_custom_products" || e.key === "preksha_last_category_update") {
      loadAppData().then(() => {
        setupHeroCategorySlider();
        renderHomepageCategories();
        renderHomepageFeaturedProducts();
        updateFooterStatistics();
        if (appState.activeCategory) {
          const stillExists = appState.categories.some(c => 
            (c.slug && appState.activeCategory.slug && c.slug.toLowerCase() === appState.activeCategory.slug.toLowerCase()) ||
            (c.name && appState.activeCategory.name && c.name.toLowerCase() === appState.activeCategory.name.toLowerCase())
          );
          if (stillExists) {
            openCategoryPage(appState.activeCategory);
          } else if (typeof closeCategoryPage === "function") {
            closeCategoryPage();
          }
        }
      });
    }
  });

  // Throttled window scroll listener for floating header styling
  let isScrollTicking = false;
  window.addEventListener("scroll", function () {
    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        const mainHeader = document.getElementById("mainHeader");
        if (mainHeader) {
          if (window.scrollY > 40) {
            mainHeader.classList.add("scrolled");
          } else {
            mainHeader.classList.remove("scrolled");
          }
        }
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  }, { passive: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStorefrontApp);
} else {
  initStorefrontApp();
}

/**
 * Progressive Web App (PWA) Install Prompt, Service Worker, and Offline Management
 */
let deferredPwaPrompt = null;

function initPWAFeatures() {
  // 1. Register Service Worker if supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.debug('Service Worker info:', err.message);
      });
    });
  }

  // 2. Offline Status Indicator
  function updateOnlineStatus() {
    let offlineBanner = document.getElementById('pwaOfflineBanner');
    if (!navigator.onLine) {
      if (!offlineBanner) {
        offlineBanner = document.createElement('div');
        offlineBanner.id = 'pwaOfflineBanner';
        offlineBanner.className = 'offline-banner';
        offlineBanner.innerHTML = '<span class="offline-pulse"></span> Offline Mode — Viewing cached catalog';
        document.body.appendChild(offlineBanner);
      }
      offlineBanner.style.display = 'flex';
    } else if (offlineBanner) {
      offlineBanner.style.display = 'none';
    }
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

/**
 * Preserve the initial hero video src for lifecycle unloading/reloading
 */
function initVideoSourcePreservation() {
  const heroVideo = document.getElementById("heroVideo");
  if (heroVideo) {
    const src = heroVideo.getAttribute("src") || heroVideo.currentSrc;
    if (src) {
      appState.savedHeroVideoSrc = src;
    }
  }
}

/**
 * Initialize Quick Links Hamburger Menus (Main & Category)
 */
function initHamburgerMenus() {
  // Homepage Hamburger
  const mainHamburger = document.getElementById("mainHamburger");
  const mainDropdown = document.getElementById("mainQuickLinksDropdown");

  if (mainHamburger && mainDropdown) {
    mainHamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = mainDropdown.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        mainHamburger.classList.add("active");
        mainDropdown.classList.add("open");
      }
    });

    // Close on link click
    mainDropdown.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        closeAllDropdowns();
      });
    });
  }

  // Category Page Hamburger
  const catHamburger = document.getElementById("categoryHamburger");
  const catDropdown = document.getElementById("categoryQuickLinksDropdown");

  if (catHamburger && catDropdown) {
    catHamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = catDropdown.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        catHamburger.classList.add("active");
        catDropdown.classList.add("open");
      }
    });

    catDropdown.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        closeAllDropdowns();
        closeCategoryPage();
        if (href && href.startsWith("#")) {
          setTimeout(() => {
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      });
    });
  }

  // Category Header "Home" button
  const categoryHomeBtn = document.getElementById("categoryHomeBtn");
  if (categoryHomeBtn) {
    categoryHomeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closeCategoryPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Global click outside to close dropdowns
  document.addEventListener("click", function () {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  const mainHamburger = document.getElementById("mainHamburger");
  const mainDropdown = document.getElementById("mainQuickLinksDropdown");
  const catHamburger = document.getElementById("categoryHamburger");
  const catDropdown = document.getElementById("categoryQuickLinksDropdown");

  if (mainHamburger) mainHamburger.classList.remove("active");
  if (mainDropdown) mainDropdown.classList.remove("open");
  if (catHamburger) catHamburger.classList.remove("active");
  if (catDropdown) catDropdown.classList.remove("open");
}

/**
 * Fetch Categories and Products from Supabase
 */
async function loadAppData() {
  let loadedCategories = [];
  let loadedProducts = [];

  const activeUrl = currentSiteConfig.customSupabaseUrl || SUPABASE_URL;
  const activeKey = currentSiteConfig.customSupabaseKey || SUPABASE_KEY;

  try {
    if (window.supabase && typeof window.supabase.createClient === "function") {
      const client = window.supabase.createClient(activeUrl, activeKey);

      // Fetch Global Site Config from Supabase if table exists
      try {
        const { data: configRow, error: configError } = await client
          .from("site_config")
          .select("value")
          .eq("key", "main_config")
          .maybeSingle();

        if (!configError && configRow && configRow.value && typeof configRow.value === "object" && !Array.isArray(configRow.value)) {
          currentSiteConfig = { ...currentSiteConfig, ...configRow.value };
          localStorage.setItem("preksha_site_config", JSON.stringify(currentSiteConfig));
          loadAndApplySiteConfig();
        }
      } catch (cErr) {
        // Table may not exist yet if user hasn't created it in their Supabase
      }

      // Fetch deleted categories blacklist from Cloud
      try {
        const { data: cloudDeleted } = await client
          .from("site_config")
          .select("value")
          .eq("key", "preksha_deleted_categories")
          .maybeSingle();
        if (cloudDeleted && Array.isArray(cloudDeleted.value)) {
          const rawLocal = localStorage.getItem("preksha_deleted_categories");
          const localArr = rawLocal ? JSON.parse(rawLocal) : [];
          const merged = new Set([...(Array.isArray(localArr) ? localArr : []), ...cloudDeleted.value].map(x => String(x).toLowerCase().trim()).filter(Boolean));
          localStorage.setItem("preksha_deleted_categories", JSON.stringify(Array.from(merged)));
        }
      } catch (dErr) {}

      // Fetch Categories
      const { data: catData, error: catError } = await client
        .from("categories")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!catError && Array.isArray(catData) && catData.length > 0) {
        // Filter active if status or is_active exists
        loadedCategories = catData.filter(c => {
          if (typeof c.is_active === "boolean") return c.is_active;
          if (typeof c.status === "string") return c.status.toLowerCase() === "active";
          return true;
        });
      }

      // Fetch Products
      const { data: prodData, error: prodError } = await client
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!prodError && Array.isArray(prodData) && prodData.length > 0) {
        loadedProducts = prodData.filter(p => {
          if (typeof p.is_active === "boolean") return p.is_active;
          if (typeof p.status === "string") return p.status.toLowerCase() === "active";
          return true;
        });
      }
    }
  } catch (err) {
    console.warn("Supabase load exception, falling back to local dataset:", err);
  }

  // Load user deleted category blacklist to prevent deleted categories from reappearing
  let deletedCategoryKeys = new Set();
  try {
    const rawDeleted = localStorage.getItem("preksha_deleted_categories");
    if (rawDeleted) {
      const arr = JSON.parse(rawDeleted);
      if (Array.isArray(arr)) {
        arr.forEach(x => {
          if (x) deletedCategoryKeys.add(String(x).toLowerCase().trim());
        });
      }
    }
  } catch (e) {}

  const isDeletedCat = (c) => {
    if (!c) return false;
    const idKey = c.id ? String(c.id).toLowerCase().trim() : "";
    const slugKey = c.slug ? String(c.slug).toLowerCase().trim() : "";
    const nameKey = c.name ? String(c.name).toLowerCase().trim() : "";
    return Boolean(
      (idKey && deletedCategoryKeys.has(idKey)) ||
      (slugKey && deletedCategoryKeys.has(slugKey)) ||
      (nameKey && deletedCategoryKeys.has(nameKey))
    );
  };

  // Auto-derive categories from products if database has products but no categories
  if (loadedCategories.length === 0 && loadedProducts.length > 0) {
    const derivedCatsMap = new Map();
    loadedProducts.forEach((p, idx) => {
      const catName = (p.category || "").trim() || "General";
      const slug = (p.category_slug || catName.toLowerCase().replace(/[^a-z0-9]+/g, "-")).trim();
      if (isDeletedCat({ name: catName, slug: slug })) {
        return; // NEVER auto-derive a deleted category
      }
      if (!derivedCatsMap.has(slug)) {
        derivedCatsMap.set(slug, {
          id: `cat-${slug}`,
          name: catName,
          slug: slug,
          description: `${catName} collection by PREKSHA LIGHTING WORLD.`,
          image_url: p.image_url || "",
          sort_order: idx + 1
        });
      }
    });
    loadedCategories = Array.from(derivedCatsMap.values());
  }

  // Filter loaded categories to remove any deleted categories
  loadedCategories = loadedCategories.filter(c => !isDeletedCat(c));

  // Combine with fallback dataset or saved custom categories
  let savedCustomCats = null;
  try {
    const rawCustom = localStorage.getItem("preksha_custom_categories");
    if (rawCustom) savedCustomCats = JSON.parse(rawCustom);
  } catch (e) {}

  if (Array.isArray(savedCustomCats) && savedCustomCats.length > 0) {
    appState.categories = savedCustomCats.filter(c => !isDeletedCat(c));

    // Also include any new ones from Supabase that aren't deleted and aren't duplicates
    const currentSlugs = new Set(appState.categories.map(c => (c.slug || c.name || "").toLowerCase()));
    loadedCategories.forEach(lc => {
      if (!isDeletedCat(lc)) {
        const slug = (lc.slug || lc.name || "").toLowerCase();
        if (!currentSlugs.has(slug)) {
          appState.categories.push(lc);
          currentSlugs.add(slug);
        }
      }
    });
  } else if (loadedCategories.length === 0) {
    // Only use fallbacks if user has never deleted categories
    if (deletedCategoryKeys.size === 0) {
      appState.categories = FALLBACK_CATEGORIES.filter(c => !isDeletedCat(c));
    } else {
      appState.categories = [];
    }
  } else {
    // Strictly use what database returned, never reviving deleted categories
    appState.categories = loadedCategories.filter(c => !isDeletedCat(c));
  }

  // Double check no deleted categories remain in appState.categories
  appState.categories = appState.categories.filter(c => !isDeletedCat(c));

  // Ensure clean sequential ordering by sort_order
  appState.categories.sort((a, b) => (Number(a.sort_order) || 99) - (Number(b.sort_order) || 99));

  if (loadedProducts.length === 0) {
    appState.products = [...FALLBACK_PRODUCTS];
  } else {
    // If Supabase returned some products, also ensure fallbacks exist for any category lacking products
    appState.products = loadedProducts;
  }

  // Load custom products saved in localStorage (prepended so newest uploads appear first, and updated edits applied)
  try {
    const savedProductsJson = localStorage.getItem("preksha_custom_products");
    if (savedProductsJson) {
      const customProds = JSON.parse(savedProductsJson);
      if (Array.isArray(customProds)) {
        customProds.forEach(cp => {
          const idx = appState.products.findIndex(p => p.id === cp.id || (p.name && cp.name && p.name.toLowerCase() === cp.name.toLowerCase()));
          if (idx !== -1) {
            appState.products[idx] = { ...appState.products[idx], ...cp };
          } else {
            appState.products.unshift(cp);
          }
        });
      }
    }
  } catch (e) {
    console.warn("Error reading custom products:", e);
  }
}

/**
 * Setup Hero Category Slider & Dot Navigation
 */
function setupHeroCategorySlider() {
  const dotsContainer = document.getElementById("heroDots");
  const categoryBadge = document.getElementById("heroCategoryBadge");
  const heroCategoryLink = document.getElementById("heroCategoryLink");
  const heroThumbnailsStrip = document.getElementById("heroThumbnailsStrip");
  const heroCard = document.getElementById("heroProductCard");
  const heroViewBtn = document.getElementById("heroViewProductBtn");

  if (appState.categories.length === 0) return;

  // Render Category Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    appState.categories.forEach((cat, index) => {
      const dot = document.createElement("button");
      dot.className = `dot ${index === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Switch to ${cat.name}`);
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        setHeroCategory(index);
        resetHeroInterval();
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Render Hero Thumbnails Strip
  if (heroThumbnailsStrip) {
    heroThumbnailsStrip.innerHTML = "";
    appState.categories.forEach((cat, index) => {
      const thumbBtn = document.createElement("button");
      thumbBtn.className = `hero-thumb-btn ${index === 0 ? "active" : ""}`;
      thumbBtn.setAttribute("type", "button");
      thumbBtn.setAttribute("aria-label", `Show ${cat.name} in hero`);
      
      const thumbImg = cat.image_url || getSvgFallback(cat.name, cat.slug || cat.name);
      thumbBtn.innerHTML = `<img src="${thumbImg}" alt="${cat.name}" onerror="this.onerror=null; this.src='${getSvgFallback(cat.name, cat.slug || cat.name)}';">`;
      
      thumbBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        setHeroCategory(index);
        resetHeroInterval();
      });
      
      heroThumbnailsStrip.appendChild(thumbBtn);
    });
  }

  // Click on Hero Product Card opens Product Viewer Modal
  const openHeroProductModal = (e) => {
    e.preventDefault();
    const currentCat = appState.categories[appState.currentHeroCategoryIndex];
    if (currentCat) {
      const prod = getFeaturedProductForCategory(currentCat);
      if (prod) {
        openProductModal(prod, 0, [prod]);
      }
    }
  };

  if (heroCard) {
    heroCard.addEventListener("click", (e) => {
      // Don't trigger if clicked on WhatsApp button
      if (e.target.closest(".hero-btn-wa")) return;
      openHeroProductModal(e);
    });
    heroCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        openHeroProductModal(e);
      }
    });
  }

  if (heroViewBtn) {
    heroViewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openHeroProductModal(e);
    });
  }

  // Set initial category & product
  setHeroCategory(0);

  // Clicking category link in hero opens the category view!
  if (heroCategoryLink) {
    heroCategoryLink.addEventListener("click", (e) => {
      e.preventDefault();
      const currentCat = appState.categories[appState.currentHeroCategoryIndex];
      if (currentCat) {
        openCategoryPage(currentCat);
      }
    });
  }

  // Start auto timer & observer
  startHeroInterval();
  initHeroVisibilityObserver();
}

/**
 * Helper to get a featured product for a category
 */
function getFeaturedProductForCategory(category) {
  if (!category) return appState.products[0] || null;
  const catNameLower = (category.name || "").toLowerCase().trim();
  const catSlugLower = (category.slug || "").toLowerCase().trim();
  const catId = category.id;

  // 1. If category has a direct custom hero image override
  if (category.hero_image_url) {
    return {
      id: `hero-${category.id}`,
      name: `${category.name} Luminaire`,
      category: category.name,
      category_slug: category.slug,
      description: category.description || "Architectural premium lighting fixture engineered for refined spaces.",
      price: "₹ 2,400",
      image_url: category.hero_image_url
    };
  }

  // 2. Look for an explicitly marked hero product in this category
  const heroFlagged = appState.products.find(p => {
    if (!p.is_hero_featured && !p.featured_hero) return false;
    if (p.category_id && catId && p.category_id === catId) return true;
    const pCat = (p.category || "").toLowerCase().trim();
    const pSlug = (p.category_slug || "").toLowerCase().trim();
    return pCat === catNameLower || pCat === catSlugLower || pSlug === catSlugLower || pCat.includes(catNameLower);
  });
  if (heroFlagged) return heroFlagged;

  // 3. Look for any matching product in this category
  const found = appState.products.find(p => {
    if (p.category_id && catId && p.category_id === catId) return true;
    const pCat = (p.category || "").toLowerCase().trim();
    const pSlug = (p.category_slug || "").toLowerCase().trim();
    return pCat === catNameLower || pCat === catSlugLower || pSlug === catSlugLower || pCat.includes(catNameLower);
  });

  if (found) return found;

  return {
    id: `hero-${category.id}`,
    name: `${category.name} Luminaire`,
    category: category.name,
    category_slug: category.slug,
    description: category.description || "Architectural premium lighting fixture engineered for refined spaces.",
    price: "₹ 2,400",
    image_url: category.image_url || getSvgFallback(category.name, category.slug || category.name)
  };
}

function setHeroCategory(index) {
  if (index < 0 || index >= appState.categories.length) return;
  appState.currentHeroCategoryIndex = index;
  const currentCat = appState.categories[index];

  // Update Hero Product Photo & Meta
  const featuredProduct = getFeaturedProductForCategory(currentCat);
  const heroBackdropImg = document.getElementById("heroBackdropImage");

  if (featuredProduct) {
    const src = featuredProduct.image_url || getSvgFallback(featuredProduct.name, featuredProduct.category);

    // Update entire background hero photo
    if (heroBackdropImg) {
      heroBackdropImg.style.opacity = "0";
      setTimeout(() => {
        heroBackdropImg.src = src;
        heroBackdropImg.alt = `${currentCat.name} - PREKSHA LIGHTING WORLD`;
        heroBackdropImg.onerror = function () {
          this.onerror = null;
          this.src = getSvgFallback(featuredProduct.name, featuredProduct.category);
        };
        heroBackdropImg.style.opacity = "1";
      }, 150);
    }

    const heroImg = document.getElementById("heroProductImage");
    const heroCatElem = document.getElementById("heroProductCategory");
    const heroNameElem = document.getElementById("heroProductName");
    const heroPriceElem = document.getElementById("heroProductPrice");
    const heroWaBtn = document.getElementById("heroWhatsappBtn");

    if (heroImg) {
      heroImg.style.opacity = "0";
      setTimeout(() => {
        heroImg.src = src;
        heroImg.alt = featuredProduct.name;
        heroImg.onerror = function () {
          this.onerror = null;
          this.src = getSvgFallback(featuredProduct.name, featuredProduct.category);
        };
        heroImg.style.opacity = "1";
      }, 150);
    }

    if (heroCatElem) {
      heroCatElem.textContent = currentCat.name;
    }

    if (heroNameElem) {
      heroNameElem.textContent = featuredProduct.name;
    }

    if (heroPriceElem) {
      if (featuredProduct.price) {
        heroPriceElem.textContent = featuredProduct.price.toString().startsWith("₹") ? featuredProduct.price : `₹ ${featuredProduct.price}`;
        heroPriceElem.style.display = "block";
      } else {
        heroPriceElem.style.display = "none";
      }
    }

    if (heroWaBtn) {
      const text = `Hello PREKSHA LIGHTING WORLD, I am interested in ${featuredProduct.name}. Please share details.`;
      heroWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    }
  }

  // Update Category dots
  const dots = document.querySelectorAll(".hero-dots .dot");
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // Update Hero thumbnails
  const thumbs = document.querySelectorAll(".hero-thumbnails-strip .hero-thumb-btn");
  thumbs.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

function startHeroInterval() {
  clearInterval(appState.heroInterval);
  appState.heroInterval = setInterval(() => {
    const heroElem = document.getElementById("home");
    if (heroElem) {
      const rect = heroElem.getBoundingClientRect();
      if (rect.bottom <= 40 || rect.top >= window.innerHeight) {
        // Offscreen - pause transitions to keep scroll buttery smooth
        return;
      }
    }
    let nextIndex = (appState.currentHeroCategoryIndex + 1) % appState.categories.length;
    setHeroCategory(nextIndex);
  }, 5000);
}

function initHeroVisibilityObserver() {
  const heroElem = document.getElementById("home");
  if (!heroElem || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startHeroInterval();
      } else {
        clearInterval(appState.heroInterval);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(heroElem);
}

function resetHeroInterval() {
  clearInterval(appState.heroInterval);
  startHeroInterval();
}

/**
 * Render Categories on Homepage
 */
function renderHomepageCategories() {
  const grid = document.getElementById("homepageCategoryGrid");
  if (!grid) return;

  grid.innerHTML = "";
  appState.categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const imgUrl = cat.image_url || getSvgFallback(cat.name, cat.slug || cat.name);
    card.innerHTML = `
      <div class="category-image-wrap">
        <img src="${imgUrl}" alt="${cat.name}" loading="lazy" onerror="this.onerror=null; this.src='${getSvgFallback(cat.name, cat.slug || cat.name)}';">
      </div>
      <h3 class="category-card-name">${cat.name}</h3>
      <p class="category-card-desc">${cat.description || "Discover premium craftsmanship and luminous architectural charm."}</p>
      <span class="category-view-btn">Explore Collection →</span>
    `;

    // Click handler to open category page
    card.addEventListener("click", () => {
      openCategoryPage(cat);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCategoryPage(cat);
      }
    });

    grid.appendChild(card);
  });
}

/**
 * Global state for Curated Showcase single-line infinite sliding
 */
let showcaseHalfWidth = 0;
let isShowcaseSliderInitialized = false;
let isShowcaseVisible = true;
let isShowcasePaused = false;
let isShowcaseInteracting = false;
let showcaseResumeTimer = null;
let isShowcaseManuallyPaused = false;
let showcaseAnimFrameId = null;
let showcaseLastTimestamp = 0;

/**
 * Render Curated Showcase / Signature Products in a continuous single sliding line
 */
function renderHomepageFeaturedProducts() {
  const grid = document.getElementById("homepageProductGrid");
  const slider = document.getElementById("homepageProductSlider");
  if (!grid) return;

  grid.innerHTML = "";

  const productsToDisplay = appState.products && appState.products.length > 0 
    ? appState.products 
    : [];

  if (productsToDisplay.length === 0) {
    grid.innerHTML = `<p style="padding: 24px; color: var(--color-text-muted); text-align: center; width: 100%;">No products available currently.</p>`;
    return;
  }

  // Ensure we have at least 6 distinct products in the base row so the track comfortably fills widescreen displays
  let baseList = [...productsToDisplay];
  while (baseList.length < 6) {
    baseList = baseList.concat(productsToDisplay);
  }

  // Set A: Primary row
  baseList.forEach((prod, idx) => {
    const card = createProductCard(prod, idx, baseList);
    card.setAttribute("data-set", "a");
    grid.appendChild(card);
  });

  // Set B: Exact cloned row for seamless infinite wrap
  baseList.forEach((prod, idx) => {
    const card = createProductCard(prod, idx, baseList);
    card.setAttribute("data-set", "b");
    grid.appendChild(card);
  });

  // Initialize or re-calibrate the single-line continuous slider
  setupShowcaseInfiniteSlider();
}

/**
 * Controller for continuous single-line sliding with pause on hover/touch and arrow navigation
 */
function setupShowcaseInfiniteSlider() {
  const slider = document.getElementById("homepageProductSlider");
  const grid = document.getElementById("homepageProductGrid");
  if (!slider || !grid) return;

  // Re-calculate the halfWidth (distance from Set A start to Set B start)
  const computeHalfWidth = () => {
    const cards = grid.querySelectorAll(".product-card");
    if (cards.length === 0) return;
    const halfCount = Math.floor(cards.length / 2);
    if (cards[halfCount]) {
      showcaseHalfWidth = cards[halfCount].offsetLeft - cards[0].offsetLeft;
    }
    if (!showcaseHalfWidth || showcaseHalfWidth <= 50) {
      showcaseHalfWidth = grid.scrollWidth / 2;
    }
  };

  requestAnimationFrame(() => {
    computeHalfWidth();
    setTimeout(computeHalfWidth, 350);
  });

  if (!isShowcaseSliderInitialized) {
    isShowcaseSliderInitialized = true;

    window.addEventListener("resize", computeHalfWidth, { passive: true });

    // 1. Pause on mouse hover (desktop)
    slider.addEventListener("mouseenter", () => {
      isShowcasePaused = true;
    });
    slider.addEventListener("mouseleave", () => {
      isShowcasePaused = false;
    });

    // 2. Pause on touch interaction (mobile swipe)
    slider.addEventListener("touchstart", () => {
      isShowcaseInteracting = true;
      clearTimeout(showcaseResumeTimer);
    }, { passive: true });

    slider.addEventListener("touchend", () => {
      clearTimeout(showcaseResumeTimer);
      showcaseResumeTimer = setTimeout(() => {
        isShowcaseInteracting = false;
      }, 2000);
    }, { passive: true });

    // 3. User manual scroll handling: seamless loop wrapping
    slider.addEventListener("scroll", () => {
      if (showcaseHalfWidth > 50) {
        if (slider.scrollLeft >= showcaseHalfWidth * 1.85) {
          slider.scrollLeft -= showcaseHalfWidth;
        } else if (slider.scrollLeft <= 5) {
          slider.scrollLeft += showcaseHalfWidth;
        }
      }
    }, { passive: true });

    // 4. Arrow navigation & pause/play controls
    const prevBtn = document.getElementById("showcasePrevBtn");
    const nextBtn = document.getElementById("showcaseNextBtn");
    const pauseBtn = document.getElementById("showcasePauseBtn");
    const pauseIcon = document.getElementById("showcasePauseIcon");
    const playIcon = document.getElementById("showcasePlayIcon");

    const getStepDistance = () => {
      const firstCard = grid.querySelector(".product-card");
      return firstCard ? firstCard.offsetWidth + 22 : 312;
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        isShowcaseInteracting = true;
        if (slider.scrollLeft <= 20 && showcaseHalfWidth > 50) {
          slider.scrollLeft += showcaseHalfWidth;
        }
        slider.scrollBy({ left: -getStepDistance(), behavior: "smooth" });
        clearTimeout(showcaseResumeTimer);
        showcaseResumeTimer = setTimeout(() => {
          isShowcaseInteracting = false;
        }, 2200);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        isShowcaseInteracting = true;
        slider.scrollBy({ left: getStepDistance(), behavior: "smooth" });
        clearTimeout(showcaseResumeTimer);
        showcaseResumeTimer = setTimeout(() => {
          isShowcaseInteracting = false;
        }, 2200);
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        isShowcaseManuallyPaused = !isShowcaseManuallyPaused;
        if (pauseIcon && playIcon) {
          pauseIcon.style.display = isShowcaseManuallyPaused ? "none" : "block";
          playIcon.style.display = isShowcaseManuallyPaused ? "block" : "none";
        }
        pauseBtn.setAttribute("aria-label", isShowcaseManuallyPaused ? "Resume Auto-Slide" : "Pause Auto-Slide");
      });
    }

    // 5. IntersectionObserver: Pause sliding when section is not in viewport
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isShowcaseVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(slider);
    }

    // 6. Smooth sliding animation loop using requestAnimationFrame
    const speed = 0.85; // smooth luxury glide speed (~50px/sec)

    function slideTick(now) {
      if (!showcaseLastTimestamp) showcaseLastTimestamp = now;
      const delta = Math.min(now - showcaseLastTimestamp, 50);
      showcaseLastTimestamp = now;

      if (
        !isShowcaseManuallyPaused &&
        !isShowcasePaused &&
        !isShowcaseInteracting &&
        isShowcaseVisible &&
        showcaseHalfWidth > 50
      ) {
        const step = speed * (delta / 16.666);
        slider.scrollLeft += step;
        if (slider.scrollLeft >= showcaseHalfWidth) {
          slider.scrollLeft -= showcaseHalfWidth;
        }
      }

      showcaseAnimFrameId = requestAnimationFrame(slideTick);
    }

    if (showcaseAnimFrameId) cancelAnimationFrame(showcaseAnimFrameId);
    showcaseAnimFrameId = requestAnimationFrame(slideTick);
  }
}

/**
 * Create a reusable product card
 */
function createProductCard(prod, index, listContext) {
  const card = document.createElement("div");
  card.className = "product-card";

  const imgUrl = prod.image_url || getSvgFallback(prod.name, prod.category);
  const priceDisplay = prod.price ? (prod.price.toString().startsWith("₹") ? prod.price : `₹ ${prod.price}`) : "";
  const categoryName = prod.category || "Premium LED";

  card.innerHTML = `
    <div class="product-image-box" tabindex="0">
      <span class="product-badge">${categoryName}</span>
      <img src="${imgUrl}" alt="${prod.name}" loading="lazy" onerror="this.onerror=null; this.src='${getSvgFallback(prod.name, prod.category)}';">
    </div>
    <div class="product-details">
      <h4 class="product-name">${prod.name}</h4>
      <p class="product-description">${prod.description || "High efficiency architectural lighting built for modern spaces."}</p>
      ${priceDisplay ? `<div class="product-price-row"><span class="product-price">${priceDisplay}</span></div>` : ""}
      <div class="product-actions">
        <button class="btn-view-product" type="button">View Product</button>
        <button class="btn-card-whatsapp" type="button" aria-label="Enquire on WhatsApp">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.5 0-2.96-.39-4.25-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.25-4.4c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.32"/></svg>
        </button>
      </div>
    </div>
  `;

  // Interaction handlers
  const imgBox = card.querySelector(".product-image-box");
  const viewBtn = card.querySelector(".btn-view-product");
  const waBtn = card.querySelector(".btn-card-whatsapp");

  const openViewer = () => {
    openProductModal(prod, index, listContext);
  };

  imgBox.addEventListener("click", openViewer);
  imgBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openViewer();
    }
  });
  viewBtn.addEventListener("click", openViewer);

  waBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openWhatsAppForProduct(prod.name);
  });

  return card;
}

/**
 * CRITICAL REQUIREMENT: SEPARATE CATEGORY VIEW & HERO VIDEO LIFECYCLE
 */
function openCategoryPage(category) {
  appState.activeCategory = category;

  // 1. Hero Video Handling
  const heroVideo = document.getElementById("heroVideo");
  if (heroVideo) {
    // Preserve src
    const currentSrc = heroVideo.getAttribute("src") || heroVideo.currentSrc;
    if (currentSrc && !appState.savedHeroVideoSrc) {
      appState.savedHeroVideoSrc = currentSrc;
    }
    // Pause, remove src, and call load() to completely unload
    try {
      heroVideo.pause();
      heroVideo.removeAttribute("src");
      heroVideo.load();
    } catch (err) {
      console.warn("Video unload error:", err);
    }
  }

  // 2. Pause hero category slider
  clearInterval(appState.heroInterval);

  // 3. Close any open dropdowns
  closeAllDropdowns();

  // 4. Update Category View Content
  const catTitle = document.getElementById("selectedCategoryTitle");
  const catDesc = document.getElementById("selectedCategoryDescription");
  const toolbarName = document.getElementById("categoryToolbarName");
  const countPill = document.getElementById("categoryProductCountPill");

  if (catTitle) catTitle.textContent = category.name;
  if (toolbarName) toolbarName.textContent = category.name;
  if (catDesc) {
    catDesc.textContent = category.description || `Explore our exclusive ${category.name} collection designed for modern luxury interiors and exteriors.`;
  }

  // 5. Filter products matching selected category
  const grid = document.getElementById("categoryProductGrid");
  if (grid) {
    grid.innerHTML = "";
    const catNameLower = (category.name || "").toLowerCase().trim();
    const catSlugLower = (category.slug || "").toLowerCase().trim();
    const catId = category.id;

    // Filter from all products
    let matchedProducts = appState.products.filter(p => {
      if (p.category_id && catId && p.category_id === catId) return true;
      const pCatLower = (p.category || "").toLowerCase().trim();
      const pSlugLower = (p.category_slug || "").toLowerCase().trim();
      if (pCatLower === catNameLower || pCatLower === catSlugLower) return true;
      if (pSlugLower === catSlugLower || pSlugLower === catNameLower) return true;
      // Partial matching
      if (catNameLower && pCatLower.includes(catNameLower)) return true;
      return false;
    });

    // If no Supabase products match, pull from fallback products
    if (matchedProducts.length === 0) {
      matchedProducts = FALLBACK_PRODUCTS.filter(p => {
        const pCatLower = (p.category || "").toLowerCase().trim();
        const pSlugLower = (p.category_slug || "").toLowerCase().trim();
        return pCatLower === catNameLower || pSlugLower === catSlugLower || pCatLower.includes(catNameLower);
      });
    }

    // Fallback if still empty: generate at least 2 showcase items
    if (matchedProducts.length === 0) {
      matchedProducts = [
        {
          id: `sample-${category.id}-1`,
          name: `${category.name} Premium Luminaire`,
          category: category.name,
          description: `Architectural Grade ${category.name} with warm luxury luminescence.`,
          price: "₹ 3,500",
          image_url: category.image_url || getSvgFallback(category.name, category.name)
        },
        {
          id: `sample-${category.id}-2`,
          name: `${category.name} Elite Series`,
          category: category.name,
          description: `Modern minimal design with superior energy efficiency and durability.`,
          price: "₹ 4,800",
          image_url: category.image_url || getSvgFallback(category.name, category.name)
        }
      ];
    }

    appState.activeCategoryProducts = matchedProducts;
    if (countPill) {
      countPill.textContent = `${matchedProducts.length} ${matchedProducts.length === 1 ? 'Product' : 'Products'}`;
    }

    // 5b. Append products
    matchedProducts.forEach((prod, index) => {
      const card = createProductCard(prod, index, matchedProducts);
      grid.appendChild(card);
    });
  }

  // 6. Add body class and display collection page
  document.body.classList.add("collection-open");
  const collectionPage = document.getElementById("collectionPage");
  if (collectionPage) {
    collectionPage.style.display = "block";
    collectionPage.scrollTop = 0;
  }
}

/**
 * Close Category Page and Restore Homepage
 */
function closeCategoryPage() {
  const collectionPage = document.getElementById("collectionPage");
  if (collectionPage) {
    collectionPage.style.display = "none";
  }

  document.body.classList.remove("collection-open");

  // Restore Hero Video
  const heroVideo = document.getElementById("heroVideo");
  if (heroVideo && appState.savedHeroVideoSrc) {
    try {
      heroVideo.src = appState.savedHeroVideoSrc;
      heroVideo.load();
      heroVideo.play().catch(() => {
        // Autoplay may need user interaction on some browsers
      });
    } catch (err) {
      console.warn("Video restore error:", err);
    }
  }

  // Restart hero category slider
  startHeroInterval();
}

// Hook "Back to Products" button
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("categoryBackBtn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeCategoryPage();
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

/**
 * PRODUCT IMAGE VIEWER / MODAL LOGIC
 */
function initModalListeners() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("modalPrevBtn");
  const nextBtn = document.getElementById("modalNextBtn");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductModal);
  }

  // Click outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  // Prev / Next Navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateModal(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateModal(1);
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeProductModal();
    } else if (e.key === "ArrowLeft") {
      navigateModal(-1);
    } else if (e.key === "ArrowRight") {
      navigateModal(1);
    }
  });
}

function openProductModal(product, index, listContext) {
  const modal = document.getElementById("productModal");
  if (!modal) return;

  appState.currentModalContext = listContext && listContext.length > 0 ? listContext : [product];
  appState.currentModalIndex = index >= 0 ? index : 0;

  renderModalContent(product);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderModalContent(product) {
  const modalImg = document.getElementById("modalProductImage");
  const modalCategory = document.getElementById("modalProductCategory");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalPrice = document.getElementById("modalProductPrice");
  const modalDesc = document.getElementById("modalProductDescription");
  const modalWhatsapp = document.getElementById("modalWhatsappBtn");

  const imgUrl = product.image_url || getSvgFallback(product.name, product.category);
  if (modalImg) {
    modalImg.src = imgUrl;
    modalImg.alt = product.name;
    modalImg.onerror = function () {
      this.onerror = null;
      this.src = getSvgFallback(product.name, product.category);
    };
  }

  if (modalCategory) {
    modalCategory.textContent = product.category || "PREKSHA LIGHTING";
  }

  if (modalTitle) {
    modalTitle.textContent = product.name;
  }

  if (modalPrice) {
    if (product.price) {
      modalPrice.textContent = product.price.toString().startsWith("₹") ? product.price : `₹ ${product.price}`;
      modalPrice.style.display = "block";
    } else {
      modalPrice.style.display = "none";
    }
  }

  if (modalDesc) {
    modalDesc.textContent = product.description || "Crafted to deliver superior lighting efficiency, aesthetic warmth, and architectural refinement.";
  }

  if (modalWhatsapp) {
    const comp = currentSiteConfig.companyName || "PREKSHA LIGHTING WORLD";
    const text = `Hello ${comp}, I am interested in ${product.name} (${product.price || 'Price on request'}). Please share details.`;
    modalWhatsapp.href = `https://wa.me/${activeWhatsappNumber}?text=${encodeURIComponent(text)}`;
  }
}

function navigateModal(direction) {
  if (!appState.currentModalContext || appState.currentModalContext.length <= 1) return;
  const count = appState.currentModalContext.length;
  appState.currentModalIndex = (appState.currentModalIndex + direction + count) % count;
  const nextProduct = appState.currentModalContext[appState.currentModalIndex];
  renderModalContent(nextProduct);
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
  }
  // Only restore body overflow if category page is not active
  if (!document.body.classList.contains("collection-open")) {
    document.body.style.overflow = "";
  }
}

/**
 * Direct WhatsApp Helper for Product Cards
 */
function openWhatsAppForProduct(productName) {
  const comp = currentSiteConfig.companyName || "PREKSHA LIGHTING WORLD";
  const text = `Hello ${comp}, I am interested in ${productName}. Please share details and pricing.`;
  const url = `https://wa.me/${activeWhatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

/**
 * Contact Form Submission -> WhatsApp
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = (document.getElementById("name")?.value || "").trim();
    const phone = (document.getElementById("phone")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    if (!name || !phone) {
      alert("Please provide your Name and Phone number.");
      return;
    }

    const comp = currentSiteConfig.companyName || "PREKSHA LIGHTING WORLD";
    const text =
      `Hello ${comp},\n\n` +
      "I would like to make an enquiry.\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      (message ? "Requirement: " + message : "");

    const url = `https://wa.me/${activeWhatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}

/**
 * Rotating City System (Homepage Footer & Category Footer)
 */
function initRotatingCities() {
  const mainCitySpan = document.getElementById("rotatingCityMain");
  const catCitySpan = document.getElementById("rotatingCityCategory");

  function updateCity() {
    const list = activeCitiesList && activeCitiesList.length > 0 ? activeCitiesList : ROTATING_CITIES;
    appState.currentCityIndex = (appState.currentCityIndex + 1) % list.length;
    const nextCity = list[appState.currentCityIndex];

    [mainCitySpan, catCitySpan].forEach(span => {
      if (span) {
        span.classList.add("fade-out");
        setTimeout(() => {
          span.textContent = nextCity;
          span.classList.remove("fade-out");
          span.classList.add("fade-in");
          setTimeout(() => span.classList.remove("fade-in"), 300);
        }, 250);
      }
    });
  }

  clearInterval(appState.cityInterval);
  appState.cityInterval = setInterval(updateCity, 2800);
}

/**
 * Update Footer Statistics Boxes
 */
function updateFooterStatistics() {
  const productCountElem = document.getElementById("footerProductCount");
  const customerCountElem = document.getElementById("footerCustomerCount");
  const cityCountElem = document.getElementById("footerCityCount");

  if (productCountElem) {
    const total = appState.products.length > 0 ? `${appState.products.length}+` : "24+";
    productCountElem.textContent = total;
  }

  if (customerCountElem) {
    customerCountElem.textContent = "500+";
  }

  if (cityCountElem) {
    cityCountElem.textContent = `${ROTATING_CITIES.length}+`;
  }
}

/**
 * Brand Logo Initializer
 * Binds the exact brand logo image across all header and footer logo tags.
 * Checks candidate filenames so that any image uploaded by the user is automatically displayed.
 */
function initBrandLogo() {
  const logoElements = document.querySelectorAll(
    ".header-logo img, #footerLogo, #categoryFooterLogo"
  );
  if (!logoElements || logoElements.length === 0) return;

  logoElements.forEach((img) => {
    ensureLogoWebsiteMatching(img);
    img.addEventListener("error", function () {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = 'true';
      this.src = "images/preksha-lite-logo.png";
      this.onerror = function() {
        this.src = PREKSHA_LOGO_FALLBACK;
      };
    }, { once: true });
  });
}

/**
 * =========================================================
 * ADMIN PANEL & PRODUCT PHOTO MANAGEMENT
 * =========================================================
 */
let currentUploadImageData = "";
let currentUploadImageName = "";

function initAdminPanel() {
  // Global admin opener redirecting to full standalone CMS portal
  window.openAdminModal = function() {
    window.location.href = "admin.html";
  };

  // Multiple keyboard shortcuts for administrator:
  // 1. Ctrl + Shift + A (or Cmd + Shift + A)
  // 2. Ctrl + Shift + M (Manage) or Ctrl + Shift + E (Edit)
  // 3. Alt + A (bypasses browser tab-search collisions)
  // 4. Double-tapping Escape within 500ms
  let lastEscTime = 0;
  window.addEventListener("keydown", function(e) {
    const isCtrlOrMeta = e.ctrlKey || e.metaKey;
    const key = e.key ? e.key.toLowerCase() : "";

    if (isCtrlOrMeta && e.shiftKey && (key === "a" || key === "m" || key === "e")) {
      e.preventDefault();
      window.location.href = "admin.html";
      return;
    }

    if (e.altKey && key === "a") {
      e.preventDefault();
      window.location.href = "admin.html";
      return;
    }

    if (e.key === "Escape") {
      const now = Date.now();
      if (now - lastEscTime < 500) {
        window.location.href = "admin.html";
      }
      lastEscTime = now;
    }
  });

  // Double click / double tap on brand logo opens admin CMS
  const mainLogo = document.getElementById("mainHeaderLogo");
  if (mainLogo) {
    mainLogo.style.cursor = "pointer";
    mainLogo.addEventListener("dblclick", function() {
      window.location.href = "admin.html";
    });
  }

  const catLogo = document.getElementById("categoryHeaderLogo");
  if (catLogo) {
    catLogo.style.cursor = "pointer";
    catLogo.addEventListener("dblclick", function() {
      window.location.href = "admin.html";
    });
  }

  const adminModal = document.getElementById("adminModal");
  if (!adminModal) return;

  const openAdminBtn = document.getElementById("openAdminBtn");
  const openAdminFromMenu = document.getElementById("openAdminFromMenu");
  const openAdminFromCategoryMenu = document.getElementById("openAdminFromCategoryMenu");
  const footerAdminLink = document.getElementById("footerAdminLink");
  const categoryFooterAdminLink = document.getElementById("categoryFooterAdminLink");
  const adminCloseBtn = document.getElementById("adminCloseBtn");

  const tabUploadBtn = document.getElementById("tabUploadBtn");
  const tabManageBtn = document.getElementById("tabManageBtn");
  const adminUploadTabContent = document.getElementById("adminUploadTabContent");
  const adminManageTabContent = document.getElementById("adminManageTabContent");

  const adminDropZone = document.getElementById("adminDropZone");
  const adminPhotoInput = document.getElementById("adminPhotoInput");
  const adminPhotoUrl = document.getElementById("adminPhotoUrl");
  const adminPhotoPreviewWrap = document.getElementById("adminPhotoPreviewWrap");
  const adminPhotoPreview = document.getElementById("adminPhotoPreview");
  const adminPreviewName = document.getElementById("adminPreviewName");
  const adminDropZonePrompt = document.getElementById("adminDropZonePrompt");
  const adminRemovePhotoBtn = document.getElementById("adminRemovePhotoBtn");

  const adminProdCategory = document.getElementById("adminProdCategory");
  const adminNewCategoryGroup = document.getElementById("adminNewCategoryGroup");
  const adminNewCatName = document.getElementById("adminNewCatName");

  const adminUploadForm = document.getElementById("adminUploadForm");
  const adminResetFormBtn = document.getElementById("adminResetFormBtn");
  const adminAlertBanner = document.getElementById("adminAlertBanner");

  const adminCatalogSearch = document.getElementById("adminCatalogSearch");
  const adminCatalogFilter = document.getElementById("adminCatalogFilter");
  const adminExportBtn = document.getElementById("adminExportBtn");
  const adminImportInput = document.getElementById("adminImportInput");

  // Open Modal function
  function openAdminModal(preselectedCategory, isNewCategory) {
    closeAllDropdowns();
    adminModal.classList.add("active");
    adminModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    populateAdminCategorySelect();
    renderAdminCatalogTable();
    hideAdminAlert();

    // Ensure Upload tab is active
    if (tabUploadBtn) {
      tabUploadBtn.click();
    }

    if (isNewCategory) {
      if (adminProdCategory) {
        adminProdCategory.value = "__new__";
        if (adminNewCategoryGroup) adminNewCategoryGroup.style.display = "block";
        if (adminNewCatName) {
          setTimeout(() => adminNewCatName.focus(), 150);
        }
      }
    } else if (preselectedCategory && adminProdCategory) {
      const target = String(preselectedCategory).toLowerCase().trim();
      const matched = Array.from(adminProdCategory.options).find(opt => {
        return (opt.value && opt.value.toLowerCase() === target) ||
               (opt.textContent && opt.textContent.toLowerCase() === target) ||
               (opt.dataset.name && opt.dataset.name.toLowerCase() === target);
      });
      if (matched) {
        adminProdCategory.value = matched.value;
      }
      if (adminNewCategoryGroup) adminNewCategoryGroup.style.display = "none";
      const nameInput = document.getElementById("adminProdName");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 150);
      }
    }
  }

  // Make globally accessible
  window.openAdminModal = openAdminModal;

  // Close Modal function
  function closeAdminModal() {
    adminModal.classList.remove("active");
    adminModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // All Trigger bindings
  const homeCategoryUploadProductBtn = document.getElementById("homeCategoryUploadProductBtn");
  const homeCategoryCreateNewBtn = document.getElementById("homeCategoryCreateNewBtn");
  const categoryHeaderUploadBtn = document.getElementById("categoryHeaderUploadBtn");
  const openUploadFromCategoryMenu = document.getElementById("openUploadFromCategoryMenu");
  const categoryBannerUploadBtn = document.getElementById("categoryBannerUploadBtn");
  const categoryToolbarUploadBtn = document.getElementById("categoryToolbarUploadBtn");

  if (homeCategoryUploadProductBtn) {
    homeCategoryUploadProductBtn.addEventListener("click", () => openAdminModal());
  }
  if (homeCategoryCreateNewBtn) {
    homeCategoryCreateNewBtn.addEventListener("click", () => openAdminModal("", true));
  }
  if (categoryHeaderUploadBtn) {
    categoryHeaderUploadBtn.addEventListener("click", () => {
      const activeCat = appState.activeCategory ? (appState.activeCategory.slug || appState.activeCategory.name) : "";
      openAdminModal(activeCat);
    });
  }
  if (openUploadFromCategoryMenu) {
    openUploadFromCategoryMenu.addEventListener("click", () => {
      const activeCat = appState.activeCategory ? (appState.activeCategory.slug || appState.activeCategory.name) : "";
      openAdminModal(activeCat);
    });
  }
  if (categoryBannerUploadBtn) {
    categoryBannerUploadBtn.addEventListener("click", () => {
      const activeCat = appState.activeCategory ? (appState.activeCategory.slug || appState.activeCategory.name) : "";
      openAdminModal(activeCat);
    });
  }
  if (categoryToolbarUploadBtn) {
    categoryToolbarUploadBtn.addEventListener("click", () => {
      const activeCat = appState.activeCategory ? (appState.activeCategory.slug || appState.activeCategory.name) : "";
      openAdminModal(activeCat);
    });
  }

  [openAdminBtn, openAdminFromMenu, openAdminFromCategoryMenu, footerAdminLink, categoryFooterAdminLink].forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openAdminModal();
      });
    }
  });

  if (adminCloseBtn) {
    adminCloseBtn.addEventListener("click", closeAdminModal);
  }

  adminModal.addEventListener("click", (e) => {
    if (e.target === adminModal) {
      closeAdminModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && adminModal.classList.contains("active")) {
      closeAdminModal();
    }
  });

  // Tab switching
  if (tabUploadBtn && tabManageBtn) {
    tabUploadBtn.addEventListener("click", () => {
      tabUploadBtn.classList.add("active");
      tabManageBtn.classList.remove("active");
      adminUploadTabContent.classList.add("active");
      adminManageTabContent.classList.remove("active");
      hideAdminAlert();
    });

    tabManageBtn.addEventListener("click", () => {
      tabManageBtn.classList.add("active");
      tabUploadBtn.classList.remove("active");
      adminManageTabContent.classList.add("active");
      adminUploadTabContent.classList.remove("active");
      renderAdminCatalogTable();
      hideAdminAlert();
    });
  }

  // Populate Categories in Dropdown
  function populateAdminCategorySelect() {
    if (!adminProdCategory) return;
    const currentVal = adminProdCategory.value;
    adminProdCategory.innerHTML = "";

    appState.categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.slug || cat.id;
      opt.textContent = cat.name;
      opt.dataset.name = cat.name;
      adminProdCategory.appendChild(opt);
    });

    // Add new category option
    const newOpt = document.createElement("option");
    newOpt.value = "__new__";
    newOpt.textContent = "+ Add New Category...";
    adminProdCategory.appendChild(newOpt);

    if (currentVal && Array.from(adminProdCategory.options).some(o => o.value === currentVal)) {
      adminProdCategory.value = currentVal;
    }

    if (adminCatalogFilter) {
      const filterVal = adminCatalogFilter.value;
      adminCatalogFilter.innerHTML = '<option value="all">All Categories</option>';
      appState.categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.slug || cat.id;
        opt.textContent = cat.name;
        adminCatalogFilter.appendChild(opt);
      });
      if (filterVal) adminCatalogFilter.value = filterVal;
    }
  }

  // Toggle new category input group
  if (adminProdCategory) {
    adminProdCategory.addEventListener("change", () => {
      if (adminProdCategory.value === "__new__") {
        adminNewCategoryGroup.style.display = "block";
        if (adminNewCatName) adminNewCatName.focus();
      } else {
        adminNewCategoryGroup.style.display = "none";
      }
    });
  }

  // Image Processing & Compression via Canvas
  function processUploadedFile(file) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showAdminAlert("Please upload a valid image file (JPG, PNG, WEBP).", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        // Auto-scale large camera photos for crisp display and efficient persistent storage
        const maxDimension = 1280;
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to high-quality JPEG
        const optimizedUrl = canvas.toDataURL("image/jpeg", 0.88);
        setPhotoPreview(optimizedUrl, file.name);
      };
      img.onerror = function() {
        setPhotoPreview(event.target.result, file.name);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  function setPhotoPreview(dataUrl, name) {
    currentUploadImageData = dataUrl;
    currentUploadImageName = name || "uploaded-photo.jpg";
    if (adminPhotoPreview) adminPhotoPreview.src = dataUrl;
    if (adminPreviewName) adminPreviewName.textContent = currentUploadImageName;
    if (adminDropZonePrompt) adminDropZonePrompt.style.display = "none";
    if (adminPhotoPreviewWrap) adminPhotoPreviewWrap.style.display = "flex";
  }

  function clearPhotoPreview() {
    currentUploadImageData = "";
    currentUploadImageName = "";
    if (adminPhotoInput) adminPhotoInput.value = "";
    if (adminPhotoUrl) adminPhotoUrl.value = "";
    if (adminPhotoPreview) adminPhotoPreview.src = "";
    if (adminPhotoPreviewWrap) adminPhotoPreviewWrap.style.display = "none";
    if (adminDropZonePrompt) adminDropZonePrompt.style.display = "flex";
  }

  // File input change
  if (adminPhotoInput) {
    adminPhotoInput.addEventListener("change", function() {
      if (this.files && this.files[0]) {
        processUploadedFile(this.files[0]);
      }
    });
  }

  // Drag and drop events
  if (adminDropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      adminDropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        adminDropZone.classList.add("dragover");
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      adminDropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        adminDropZone.classList.remove("dragover");
      });
    });

    adminDropZone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      const files = dt ? dt.files : null;
      if (files && files.length > 0) {
        processUploadedFile(files[0]);
      }
    });
  }

  // Remove photo button
  if (adminRemovePhotoBtn) {
    adminRemovePhotoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clearPhotoPreview();
    });
  }

  // Photo URL input
  if (adminPhotoUrl) {
    adminPhotoUrl.addEventListener("input", function() {
      const url = this.value.trim();
      if (url) {
        setPhotoPreview(url, url.split("/").pop() || "Remote Image");
      } else if (!adminPhotoInput.files || adminPhotoInput.files.length === 0) {
        clearPhotoPreview();
      }
    });
  }

  // Reset form button
  if (adminResetFormBtn) {
    adminResetFormBtn.addEventListener("click", () => {
      adminUploadForm.reset();
      clearPhotoPreview();
      adminNewCategoryGroup.style.display = "none";
      hideAdminAlert();
    });
  }

  // Form Submit Handler
  if (adminUploadForm) {
    adminUploadForm.addEventListener("submit", async function(e) {
      e.preventDefault();

      const prodName = document.getElementById("adminProdName").value.trim();
      const prodPrice = document.getElementById("adminProdPrice").value.trim();
      const prodDesc = document.getElementById("adminProdDesc").value.trim();
      const isHeroCheck = document.getElementById("adminHeroCheck").checked;
      let categorySlug = adminProdCategory.value;
      let categoryName = "";

      if (!prodName) {
        showAdminAlert("Please enter a product / luminaire name.", "error");
        return;
      }

      if (!currentUploadImageData) {
        showAdminAlert("Please upload a product photo or specify an image URL.", "error");
        return;
      }

      // Handle new category creation
      if (categorySlug === "__new__") {
        const newCatVal = adminNewCatName.value.trim();
        if (!newCatVal) {
          showAdminAlert("Please provide a name for the new category.", "error");
          return;
        }

        categoryName = newCatVal;
        categorySlug = newCatVal.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        const newCatId = `cat-${categorySlug}-${Date.now()}`;

        const newCategoryObj = {
          id: newCatId,
          name: categoryName,
          slug: categorySlug,
          description: `Exclusive ${categoryName} collection crafted by PREKSHA LIGHTING WORLD.`,
          image_url: currentUploadImageData,
          sort_order: appState.categories.length + 1
        };

        appState.categories.push(newCategoryObj);

        // Save new categories
        try {
          const customCats = JSON.parse(localStorage.getItem("preksha_custom_categories") || "[]");
          customCats.push(newCategoryObj);
          localStorage.setItem("preksha_custom_categories", JSON.stringify(customCats));
        } catch (err) {
          console.warn("Storage write error:", err);
        }
      } else {
        const selectedOpt = adminProdCategory.selectedOptions[0];
        categoryName = selectedOpt ? (selectedOpt.dataset.name || selectedOpt.textContent) : categorySlug;
      }

      // Format price
      let formattedPrice = prodPrice;
      if (formattedPrice && !formattedPrice.startsWith("₹")) {
        formattedPrice = `₹ ${formattedPrice}`;
      }

      // Create new product
      const newProductObj = {
        id: `prod-custom-${Date.now()}`,
        name: prodName,
        category: categoryName,
        category_slug: categorySlug,
        price: formattedPrice || "₹ 0",
        description: prodDesc || `${categoryName} luminaire engineered with premium craftsmanship.`,
        image_url: currentUploadImageData,
        is_hero_featured: isHeroCheck,
        is_custom: true,
        created_at: new Date().toISOString()
      };

      // If hero checked, clear previous hero flags for this category and set category override
      if (isHeroCheck) {
        appState.products.forEach(p => {
          if ((p.category || "").toLowerCase() === categoryName.toLowerCase() ||
              (p.category_slug || "").toLowerCase() === categorySlug.toLowerCase()) {
            p.is_hero_featured = false;
          }
        });
        const matchedCat = appState.categories.find(c =>
          (c.slug || "").toLowerCase() === categorySlug.toLowerCase() ||
          (c.name || "").toLowerCase() === categoryName.toLowerCase()
        );
        if (matchedCat) {
          matchedCat.hero_image_url = currentUploadImageData;
        }
      }

      // Prepend product so newest appears first
      appState.products.unshift(newProductObj);

      // Save to localStorage
      try {
        const savedProds = JSON.parse(localStorage.getItem("preksha_custom_products") || "[]");
        savedProds.unshift(newProductObj);
        localStorage.setItem("preksha_custom_products", JSON.stringify(savedProds));
      } catch (err) {
        console.warn("Storage write error for products:", err);
      }

      // Optionally attempt Supabase insert in background
      try {
        if (window.supabase && typeof window.supabase.createClient === "function") {
          const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
          client.from("products").insert([{
            name: newProductObj.name,
            category: newProductObj.category,
            category_slug: newProductObj.category_slug,
            price: newProductObj.price,
            description: newProductObj.description,
            image_url: newProductObj.image_url,
            is_active: true
          }]).then(({ error }) => {
            if (error) console.warn("Supabase background insert note:", error.message);
          });
        }
      } catch (err) {
        console.warn("Supabase background attempt ignored:", err);
      }

      // Re-render storefront live!
      setupHeroCategorySlider();
      renderHomepageCategories();
      renderHomepageFeaturedProducts();
      updateFooterStatistics();

      // If set as hero, switch hero directly to this category to showcase the new photo immediately
      const catIndex = appState.categories.findIndex(c =>
        (c.slug || "").toLowerCase() === categorySlug.toLowerCase() ||
        (c.name || "").toLowerCase() === categoryName.toLowerCase()
      );
      if (catIndex >= 0) {
        setHeroCategory(catIndex);
      }

      // If category page is open, refresh products
      if (appState.activeCategory) {
        const activeCatSlug = (appState.activeCategory.slug || "").toLowerCase();
        if (activeCatSlug === categorySlug.toLowerCase()) {
          openCategoryPage(appState.activeCategory);
        }
      }

      // Success alert
      showAdminAlert(`✨ Success! "${prodName}" photo and details published live into the catalog.`, "success");

      // Auto-close modal after brief delay if user was inside a category page
      if (appState.activeCategory) {
        setTimeout(() => {
          closeAdminModal();
        }, 1300);
      }

      // Reset form
      adminUploadForm.reset();
      clearPhotoPreview();
      adminNewCategoryGroup.style.display = "none";
      populateAdminCategorySelect();
      renderAdminCatalogTable();
    });
  }

  // Catalog Manager Table Render
  function renderAdminCatalogTable() {
    const tableBody = document.getElementById("adminCatalogTableBody");
    const countBadge = document.getElementById("adminProductCountBadge");
    if (!tableBody) return;

    if (countBadge) {
      countBadge.textContent = appState.products.length;
    }

    const searchTerm = (adminCatalogSearch ? adminCatalogSearch.value : "").toLowerCase().trim();
    const filterCategory = adminCatalogFilter ? adminCatalogFilter.value : "all";

    const filtered = appState.products.filter(p => {
      const matchSearch = !searchTerm ||
        (p.name && p.name.toLowerCase().includes(searchTerm)) ||
        (p.category && p.category.toLowerCase().includes(searchTerm)) ||
        (p.description && p.description.toLowerCase().includes(searchTerm));

      const pSlug = (p.category_slug || p.category || "").toLowerCase();
      const matchCategory = filterCategory === "all" || pSlug === filterCategory.toLowerCase();

      return matchSearch && matchCategory;
    });

    tableBody.innerHTML = "";

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 36px; color: #8c8273;">
            No luminaires found matching your filter criteria.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach((prod, index) => {
      const tr = document.createElement("tr");
      const isCustom = !!prod.is_custom;
      const isHero = !!prod.is_hero_featured;
      const imgSrc = prod.image_url || getSvgFallback(prod.name, prod.category);

      tr.innerHTML = `
        <td>
          <img class="admin-table-thumb" src="${imgSrc}" alt="${prod.name}" onerror="this.onerror=null; this.src='${getSvgFallback(prod.name, prod.category)}';">
        </td>
        <td>
          <div class="admin-table-title">${prod.name}</div>
          <div class="admin-table-sub">${prod.description ? prod.description.substring(0, 50) + '...' : ''}</div>
          ${isHero ? '<div class="admin-hero-star-badge">★ Featured Hero Luminaire</div>' : ''}
        </td>
        <td><span class="modal-category-tag" style="margin:0; font-size:0.72rem;">${prod.category || 'General'}</span></td>
        <td style="font-weight: 600; color: var(--color-gold-dark);">${prod.price || '—'}</td>
        <td>
          <span class="admin-source-badge ${isCustom ? 'custom' : 'default'}">
            ${isCustom ? 'Custom Upload' : 'Built-in'}
          </span>
        </td>
        <td>
          <div class="admin-actions-cell">
            <button class="admin-action-btn btn-hero" type="button" data-action="set-hero" data-id="${prod.id}" title="Set this photo as the Hero background for this category">
              ${isHero ? '★ Hero' : '☆ Set Hero'}
            </button>
            <button class="admin-action-btn" type="button" data-action="preview" data-id="${prod.id}" title="Preview product modal">
              👁️ View
            </button>
            ${isCustom ? `
              <button class="admin-action-btn btn-delete" type="button" data-action="delete" data-id="${prod.id}" title="Delete custom product">
                🗑️
              </button>
            ` : ''}
          </div>
        </td>
      `;

      // Event Listeners for actions
      const setHeroBtn = tr.querySelector('[data-action="set-hero"]');
      if (setHeroBtn) {
        setHeroBtn.addEventListener("click", () => {
          makeProductHeroForCategory(prod);
        });
      }

      const previewBtn = tr.querySelector('[data-action="preview"]');
      if (previewBtn) {
        previewBtn.addEventListener("click", () => {
          openProductModal(prod, index, filtered);
        });
      }

      const deleteBtn = tr.querySelector('[data-action="delete"]');
      if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
          deleteCustomProduct(prod);
        });
      }

      tableBody.appendChild(tr);
    });
  }

  // Action: Make Product Hero for its Category
  function makeProductHeroForCategory(product) {
    const catNameLower = (product.category || "").toLowerCase().trim();
    const catSlugLower = (product.category_slug || "").toLowerCase().trim();

    // Mark product as hero, unmark others in this category
    appState.products.forEach(p => {
      const pCat = (p.category || "").toLowerCase().trim();
      const pSlug = (p.category_slug || "").toLowerCase().trim();
      if (pCat === catNameLower || pSlug === catSlugLower) {
        p.is_hero_featured = (p.id === product.id);
      }
    });

    // Update category hero_image_url
    const matchedCat = appState.categories.find(c =>
      (c.slug || "").toLowerCase() === catSlugLower ||
      (c.name || "").toLowerCase() === catNameLower
    );
    if (matchedCat) {
      matchedCat.hero_image_url = product.image_url;
    }

    // Save custom products state
    try {
      const customProds = appState.products.filter(p => p.is_custom);
      localStorage.setItem("preksha_custom_products", JSON.stringify(customProds));
    } catch (e) {
      console.warn("Storage update error:", e);
    }

    // Live update storefront hero
    const catIndex = appState.categories.findIndex(c =>
      (c.slug || "").toLowerCase() === catSlugLower ||
      (c.name || "").toLowerCase() === catNameLower
    );
    if (catIndex >= 0) {
      setHeroCategory(catIndex);
    }

    showAdminAlert(`★ "${product.name}" photo is now the featured Hero background for ${product.category}!`, "success");
    renderAdminCatalogTable();
  }

  // Action: Delete Custom Product
  function deleteCustomProduct(product) {
    if (!confirm(`Are you sure you want to remove "${product.name}" from the catalog?`)) {
      return;
    }

    appState.products = appState.products.filter(p => p.id !== product.id);

    try {
      const customProds = JSON.parse(localStorage.getItem("preksha_custom_products") || "[]");
      const updated = customProds.filter(p => p.id !== product.id);
      localStorage.setItem("preksha_custom_products", JSON.stringify(updated));
    } catch (e) {
      console.warn("Storage delete error:", e);
    }

    // Re-render storefront
    renderHomepageCategories();
    renderHomepageFeaturedProducts();
    updateFooterStatistics();
    if (appState.activeCategory) {
      openCategoryPage(appState.activeCategory);
    }

    showAdminAlert(`"${product.name}" removed from catalog.`, "success");
    renderAdminCatalogTable();
  }

  // Search and Filter Listeners in Catalog Manager
  if (adminCatalogSearch) {
    adminCatalogSearch.addEventListener("input", renderAdminCatalogTable);
  }
  if (adminCatalogFilter) {
    adminCatalogFilter.addEventListener("change", renderAdminCatalogTable);
  }

  // Export JSON Backup
  if (adminExportBtn) {
    adminExportBtn.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.products, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `preksha-lighting-catalog-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showAdminAlert("Catalog JSON exported successfully.", "success");
    });
  }

  // Import JSON
  if (adminImportInput) {
    adminImportInput.addEventListener("change", function() {
      const file = this.files && this.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(event) {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            const customItems = imported.map(p => ({
              ...p,
              id: p.id || `prod-imported-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
              is_custom: true
            }));

            // Merge with existing products
            const existingIds = new Set(appState.products.map(p => p.id));
            const newItems = customItems.filter(p => !existingIds.has(p.id));
            appState.products = [...newItems, ...appState.products];

            // Save to localStorage
            const savedProds = JSON.parse(localStorage.getItem("preksha_custom_products") || "[]");
            localStorage.setItem("preksha_custom_products", JSON.stringify([...newItems, ...savedProds]));

            // Refresh storefront
            renderHomepageCategories();
            renderHomepageFeaturedProducts();
            updateFooterStatistics();
            renderAdminCatalogTable();
            showAdminAlert(`Successfully imported ${newItems.length} products into catalog!`, "success");
          } else {
            showAdminAlert("Invalid JSON structure: Expected an array of products.", "error");
          }
        } catch (err) {
          showAdminAlert("Failed to parse JSON file: " + err.message, "error");
        }
      };
      reader.readAsText(file);
      this.value = "";
    });
  }

  // Alert helpers
  function showAdminAlert(message, type = "success") {
    if (!adminAlertBanner) return;
    adminAlertBanner.textContent = message;
    adminAlertBanner.className = `admin-alert ${type}`;
    adminAlertBanner.style.display = "flex";
    setTimeout(() => {
      hideAdminAlert();
    }, 6000);
  }

  function hideAdminAlert() {
    if (!adminAlertBanner) return;
    adminAlertBanner.style.display = "none";
  }
}
