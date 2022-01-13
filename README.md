## Guide To Tailwind CSS

1. Installation:

- Official Docs:
  https://tailwindcss.com/docs/installation/framework-guides
  => Choose your frame work

- This repo is a create-react-app so the installation link will be
  https://tailwindcss.com/docs/guides/create-react-app

  => Follow the steps in this docs

- Install VSCode Extension:
  +, PostCSS Language Support
  +, Tailwind CSS IntelliSense

  if you haven't install it

=> Then you can already start using Tailwind CSS classes

2. Customized Values:

- The colors object in ./tailwind.config.js:
  +, the attribute primary is configured so we can start using
  classes like text-primary or bg-primary and the color
  will be applied

3. Tips:

- To enable HTML autofill in JSX:

https://stackoverflow.com/questions/39320393/jsx-or-html-autocompletion-in-visual-studio-code

try to open settings.json in vs code:
Step 1: on the top right, next to the apple icon, click on Code
Step 2: Click on Preferences
Step 3: Click on Settings
Step 4: Click on Extensions
Step 5: Click on "Edit in settings.json"
Step 6: add the following code:

"emmet.includeLanguages": {
"javascript": "html"
}
