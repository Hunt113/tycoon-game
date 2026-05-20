const express = require('express');
    const app = express();
    const path = require('path');
    const PORT = process.env.PORT || 3000;

    app.use(express.static(__dirname));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.listen(PORT, () => console.log(`Tycoon running on port ${PORT}`));
    ```
  

  
    Paste the following code into your **`index.html`**. It includes a basic CSS layout, the game variables (cash, droppers, upgrade costs), and the core dynamic game loop that updates your cash every second.

    ```html
    
    
    
        
        
        Web Incremental Tycoon
        
    
    
        
            Neon Tycoon
            Generate cash, buy upgrades, watch numbers go up!
            Cash: $0
            Income: $0/sec

            Manual Collect (+$1)

            
                Buy Upgrades
                Buy Basic Dropper (Cost: $15)
                Buy Mega Dropper (Cost: $100)
            
        

        
    
    
    ```
  

  
    Render needs to know what code library dependencies your server has. Create one more file in that same folder named exactly **`package.json`** and paste this metadata:
