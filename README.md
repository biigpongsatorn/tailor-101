# tailor-101

Proof of concept Layout Service name Tailor

<img src="https://camo.githubusercontent.com/3018354754cc0c9f1f6b27ac68bd8060a11db5a7/68747470733a2f2f7261776769746875622e636f6d2f7a616c616e646f2f7461696c6f722f6d61737465722f6c6f676f2f7461696c6f722d6c6f676f2e737667">

# Example

```
git clone https://github.com/biigpongsatorn/tailor-101.git

// Tab 1
cd basic-html
npm install
npm run start

// Tab 2
cd fragment-1
npm install
npm run build
npm run start

// Tab 3
cd fragment-2
npm install
npm run build
npm run start

// Tab 4
cd ssr-fragment
npm install
npm run build
npm run start

// Tab 5
cd sync-async
npm run start

// Tab 6
cd node-tailor
docker build -t tailor-layout-service .
docker run -p 8080:8080 tailor-layout-service

// Tailor server listening on port 8080
```