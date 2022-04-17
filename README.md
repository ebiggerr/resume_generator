# Résumé generator

Résumé generator.

Source: [Anthony Fu](https://github.com/antfu/resume)


## How it works

1. Clone the repo
```
git clone https://github.com/ebiggerr/resume_generator.git
cd resume_generator
```
2. Install all the dependencies
```
npm install
```

3. Create and prepare your `resume.json` (`/resume_generator/resume.json`)

   - [Example](https://gist.github.com/thomasdavis/c9dcfa1b37dec07fb2ee7f36d7278105) of `resume.json`

    OR
    
    You can load a Gist hosted on GitHub. Go to the `build.js`

    ```
       const gist = <replace here>
      ```
   For example,
    ```
    const gist = 'thomasdavis/c9dcfa1b37dec07fb2ee7f36d7278105'
   ```


4. Build 

```
npm run build
```

5. View the result
    - Index.html (`resume_generator/dist/index.html`)
    - resume.pdf (`resume_generator/dist/resume.pdf`)
