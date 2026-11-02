# Jeng’s Workbench

Personal dashboard for tasks, study tracks, quick notes, and a local calendar.

## Run locally

Open `workbench.html` in a browser. Tasks, notes, and events are saved in that browser's local storage.

To enable the install-to-home-screen prompt and service worker, serve this folder from `localhost` or HTTPS. For example, in PowerShell:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`.

## Calendar

The calendar stores events in this browser and can import/export `.ics` files. It does not sync directly with an external calendar account.

## Publish with GitHub Pages

The repository root contains `index.html`, which opens the workbench. In the GitHub repository, enable Pages from the `main` branch and the root folder.

