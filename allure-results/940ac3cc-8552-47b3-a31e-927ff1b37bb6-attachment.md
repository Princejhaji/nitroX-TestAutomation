# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hiu_aiu.test.js >> Complete hiu_aiu test cases
- Location: tests\hiu_aiu.test.js:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span:has-text("+918767890281")')

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - navigation [ref=e7]:
    - generic [ref=e8]:
      - img "Light Mode Logo" [ref=e10]
      - button "Open App Switcher" [ref=e12] [cursor=pointer]:
        - img [ref=e13]
    - button "Prince Store2" [ref=e17] [cursor=pointer]:
      - generic [ref=e18]: Prince Store2
      - img [ref=e19]
    - generic [ref=e21]:
      - generic [ref=e22]:
        - link "Dashboard" [ref=e23] [cursor=pointer]:
          - /url: /dashboard
          - img [ref=e24]
          - paragraph [ref=e26]: Dashboard
        - link "Nitro Ads" [ref=e27] [cursor=pointer]:
          - /url: /advertisements
          - img [ref=e28]
          - paragraph [ref=e30]: Nitro Ads
        - link "Live" [ref=e31] [cursor=pointer]:
          - /url: /live
          - img [ref=e32]
          - paragraph [ref=e34]: Live
        - link "Contacts" [ref=e35] [cursor=pointer]:
          - /url: /contacts
          - img [ref=e36]
          - paragraph [ref=e38]: Contacts
        - link "Integrations" [ref=e39] [cursor=pointer]:
          - /url: /integrations
          - img [ref=e40]
          - paragraph [ref=e42]: Integrations
        - link "Forever Links" [ref=e43] [cursor=pointer]:
          - /url: /forever-links
          - img [ref=e44]
          - paragraph [ref=e48]: Forever Links
        - link "Consent Management" [ref=e49] [cursor=pointer]:
          - /url: /consent-management
          - img [ref=e50]
          - paragraph [ref=e52]: Consent Management
        - link "High Intent Users BETA" [ref=e53] [cursor=pointer]:
          - /url: /high-intent-users
          - img [ref=e54]
          - paragraph [ref=e56]: High Intent Users
          - generic [ref=e57]: BETA
      - navigation [ref=e59]:
        - link "Billing" [ref=e60] [cursor=pointer]:
          - /url: /billing
          - generic [ref=e61]:
            - img [ref=e62]
            - text: Billing
        - generic [ref=e65] [cursor=pointer]:
          - img [ref=e66]
          - paragraph [ref=e70]: Logout
        - generic [ref=e71]:
          - link "profile Prince Jha" [ref=e72] [cursor=pointer]:
            - /url: /profile
            - img "profile" [ref=e73]
            - paragraph [ref=e74]: Prince Jha
          - button "Toggle Notifications" [ref=e75] [cursor=pointer]:
            - img [ref=e77]
  - generic [ref=e81]:
    - heading "High Intent Users" [level=4] [ref=e82]
    - banner [ref=e83]:
      - generic [ref=e84]:
        - heading [level=1]
        - generic [ref=e88]:
          - button "High Intent Users" [ref=e89] [cursor=pointer]
          - button "All Identified Users" [ref=e90] [cursor=pointer]
      - generic [ref=e92]:
        - generic [ref=e93]:
          - generic "Refresh" [ref=e94]:
            - img [ref=e95] [cursor=pointer]
          - generic "Download Users" [ref=e101]:
            - img [ref=e102] [cursor=pointer]
          - generic "Upload Users"
        - generic [ref=e108]:
          - textbox "Datepicker input" [ref=e109] [cursor=pointer]:
            - /placeholder: Choose a date range
            - text: 29/04/2026 - 29/05/2026
          - img [ref=e110] [cursor=pointer]
        - button "Sort By" [ref=e117] [cursor=pointer]:
          - generic [ref=e118]: Sort By
          - img [ref=e119]
    - generic [ref=e121]:
      - generic [ref=e124]:
        - generic [ref=e126] [cursor=pointer]:
          - generic [ref=e128]:
            - img [ref=e129]
            - img [ref=e131]
          - generic [ref=e132]:
            - generic [ref=e133]:
              - generic [ref=e134]: test22516@nitrotest.com
              - generic [ref=e135]:
                - generic [ref=e137]: Not Available
                - generic [ref=e138]: "+919111904185"
            - generic [ref=e139]:
              - generic [ref=e141]:
                - paragraph [ref=e142]: "Cart Value:"
                - generic [ref=e143]: $600
              - generic [ref=e145]:
                - paragraph [ref=e146]: May 29, 2026 4:52 PM
                - paragraph [ref=e147]:
                  - generic [ref=e148]: test22516@nitrotest.com
        - generic [ref=e150] [cursor=pointer]:
          - generic [ref=e152]:
            - img [ref=e153]
            - img [ref=e155]
          - generic [ref=e156]:
            - generic [ref=e157]:
              - generic [ref=e158]: test39201@nitrotest.com
              - generic [ref=e159]:
                - generic [ref=e161]: Not Available
                - generic [ref=e162]: "+919912441324"
            - generic [ref=e163]:
              - generic [ref=e165]:
                - paragraph [ref=e166]: "Cart Value:"
                - generic [ref=e167]: $600
              - generic [ref=e169]:
                - paragraph [ref=e170]: May 29, 2026 4:50 PM
                - paragraph [ref=e171]:
                  - generic [ref=e172]: test39201@nitrotest.com
        - generic [ref=e174] [cursor=pointer]:
          - generic [ref=e176]:
            - img [ref=e177]
            - img [ref=e179]
          - generic [ref=e180]:
            - generic [ref=e181]:
              - generic [ref=e182]: test62644@nitrotest.com
              - generic [ref=e183]:
                - generic [ref=e185]: Not Available
                - generic [ref=e186]: "+919021763683"
            - generic [ref=e187]:
              - generic [ref=e189]:
                - paragraph [ref=e190]: "Cart Value:"
                - generic [ref=e191]: $600
              - generic [ref=e193]:
                - paragraph [ref=e194]: May 29, 2026 4:46 PM
                - paragraph [ref=e195]:
                  - generic [ref=e196]: test62644@nitrotest.com
        - generic [ref=e198] [cursor=pointer]:
          - generic [ref=e200]:
            - img [ref=e201]
            - img [ref=e203]
          - generic [ref=e204]:
            - generic [ref=e205]:
              - generic [ref=e206]: "+918767890281"
              - generic [ref=e207]:
                - generic [ref=e209]: South West Delhi, Delhi
                - generic [ref=e210]: "+918767890281"
            - generic [ref=e211]:
              - generic [ref=e213]:
                - paragraph [ref=e214]: "Cart Value:"
                - generic [ref=e215]: $750
              - generic [ref=e217]:
                - paragraph [ref=e218]: May 21, 2026 7:07 PM
                - paragraph [ref=e219]:
                  - generic [ref=e220]: Not Available
        - generic [ref=e222] [cursor=pointer]:
          - generic [ref=e224]:
            - img [ref=e225]
            - img [ref=e227]
          - generic [ref=e228]:
            - generic [ref=e229]:
              - generic [ref=e230]: "+918777758583"
              - generic [ref=e231]:
                - generic [ref=e233]: Meerut, Uttar Pradesh
                - generic [ref=e234]: "+918777758583"
            - generic [ref=e235]:
              - generic [ref=e237]:
                - paragraph [ref=e238]: "Cart Value:"
                - generic [ref=e239]: $1500
              - generic [ref=e241]:
                - paragraph [ref=e242]: May 21, 2026 7:05 PM
                - paragraph [ref=e243]:
                  - generic [ref=e244]: Not Available
        - generic [ref=e246] [cursor=pointer]:
          - img [ref=e249]
          - generic [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e253]: "+918076943874"
              - generic [ref=e254]:
                - generic [ref=e256]: Not Available
                - generic [ref=e257]: "+918076943874"
            - generic [ref=e258]:
              - generic [ref=e260]:
                - paragraph [ref=e261]: "Cart Value:"
                - generic [ref=e262]: $600
              - generic [ref=e264]:
                - paragraph [ref=e265]: May 21, 2026 5:34 PM
                - paragraph [ref=e266]:
                  - generic [ref=e267]: Not Available
        - generic [ref=e269] [cursor=pointer]:
          - img [ref=e272]
          - generic [ref=e274]:
            - generic [ref=e275]:
              - generic [ref=e276]: "+919999988888"
              - generic [ref=e277]:
                - generic [ref=e279]: Not Available
                - generic [ref=e280]: "+919999988888"
            - generic [ref=e281]:
              - generic [ref=e283]:
                - paragraph [ref=e284]: "Cart Value:"
                - generic [ref=e285]: $600
              - generic [ref=e287]:
                - paragraph [ref=e288]: May 15, 2026 7:27 PM
                - paragraph [ref=e289]:
                  - generic [ref=e290]: Not Available
        - generic [ref=e292] [cursor=pointer]:
          - generic [ref=e294]:
            - img [ref=e295]
            - img [ref=e297]
          - generic [ref=e298]:
            - generic [ref=e299]:
              - generic [ref=e300]: "+918076969867"
              - generic [ref=e301]:
                - generic [ref=e303]: East Delhi, Delhi
                - generic [ref=e304]: "+918076969867"
            - generic [ref=e305]:
              - generic [ref=e307]:
                - paragraph [ref=e308]: "Cart Value:"
                - generic [ref=e309]: $600
              - generic [ref=e311]:
                - paragraph [ref=e312]: May 15, 2026 7:24 PM
                - paragraph [ref=e313]:
                  - generic [ref=e314]: Not Available
        - generic [ref=e316] [cursor=pointer]:
          - img [ref=e319]
          - generic [ref=e321]:
            - generic [ref=e322]:
              - generic [ref=e323]: "+918075949948"
              - generic [ref=e324]:
                - generic [ref=e326]: Not Available
                - generic [ref=e327]: "+918075949948"
            - generic [ref=e328]:
              - generic [ref=e330]:
                - paragraph [ref=e331]: "Cart Value:"
                - generic [ref=e332]: $600
              - generic [ref=e334]:
                - paragraph [ref=e335]: May 15, 2026 5:49 PM
                - paragraph [ref=e336]:
                  - generic [ref=e337]: Not Available
        - generic [ref=e339] [cursor=pointer]:
          - img [ref=e342]
          - generic [ref=e344]:
            - generic [ref=e345]:
              - generic [ref=e346]: "+918075858756"
              - generic [ref=e347]:
                - generic [ref=e349]: Not Available
                - generic [ref=e350]: "+918075858756"
            - generic [ref=e351]:
              - generic [ref=e353]:
                - paragraph [ref=e354]: "Cart Value:"
                - generic [ref=e355]: $1200
              - generic [ref=e357]:
                - paragraph [ref=e358]: May 13, 2026 4:03 PM
                - paragraph [ref=e359]:
                  - generic [ref=e360]: Not Available
        - generic [ref=e362] [cursor=pointer]:
          - generic [ref=e364]:
            - img [ref=e365]
            - img [ref=e367]
          - generic [ref=e368]:
            - generic [ref=e369]:
              - generic [ref=e370]: "+919876789012"
              - generic [ref=e371]:
                - generic [ref=e373]: East Delhi, Delhi
                - generic [ref=e374]: "+919876789012"
            - generic [ref=e375]:
              - generic [ref=e377]:
                - paragraph [ref=e378]: "Cart Value:"
                - generic [ref=e379]: $750
              - generic [ref=e381]:
                - paragraph [ref=e382]: May 13, 2026 3:59 PM
                - paragraph [ref=e383]:
                  - generic [ref=e384]: Not Available
        - generic [ref=e386] [cursor=pointer]:
          - img [ref=e389]
          - generic [ref=e391]:
            - generic [ref=e392]:
              - generic [ref=e393]: "+918076969867"
              - generic [ref=e394]:
                - generic [ref=e396]: Not Available
                - generic [ref=e397]: "+918076969867"
            - generic [ref=e398]:
              - generic [ref=e400]:
                - paragraph [ref=e401]: "Cart Value:"
                - generic [ref=e402]: $750
              - generic [ref=e404]:
                - paragraph [ref=e405]: May 13, 2026 3:58 PM
                - paragraph [ref=e406]:
                  - generic [ref=e407]: Not Available
        - generic [ref=e409] [cursor=pointer]:
          - generic [ref=e411]:
            - img [ref=e412]
            - img [ref=e414]
          - generic [ref=e415]:
            - generic [ref=e416]:
              - generic [ref=e417]: PRINCE jHA
              - generic [ref=e418]:
                - generic [ref=e420]: East Delhi, Delhi
                - generic [ref=e421]: "+918654567891"
            - generic [ref=e422]:
              - generic [ref=e424]:
                - paragraph [ref=e425]: "Cart Value:"
                - generic [ref=e426]: $750
              - generic [ref=e428]:
                - paragraph [ref=e429]: May 13, 2026 3:52 PM
                - paragraph [ref=e430]:
                  - generic [ref=e431]: Not Available
        - generic [ref=e433] [cursor=pointer]:
          - img [ref=e436]
          - generic [ref=e438]:
            - generic [ref=e439]:
              - generic [ref=e440]: "+918765456781"
              - generic [ref=e441]:
                - generic [ref=e443]: Not Available
                - generic [ref=e444]: "+918765456781"
            - generic [ref=e445]:
              - generic [ref=e447]:
                - paragraph [ref=e448]: "Cart Value:"
                - generic [ref=e449]: $750
              - generic [ref=e451]:
                - paragraph [ref=e452]: May 5, 2026 5:58 PM
                - paragraph [ref=e453]:
                  - generic [ref=e454]: Not Available
        - generic [ref=e456] [cursor=pointer]:
          - img [ref=e459]
          - generic [ref=e461]:
            - generic [ref=e462]:
              - generic [ref=e463]: "+919876567876"
              - generic [ref=e464]:
                - generic [ref=e466]: Unknown City, Unknown State
                - generic [ref=e467]: "+919876567876"
            - generic [ref=e468]:
              - generic [ref=e470]:
                - paragraph [ref=e471]: "Cart Value:"
                - generic [ref=e472]: $1930
              - generic [ref=e474]:
                - paragraph [ref=e475]: May 5, 2026 4:33 PM
                - paragraph [ref=e476]:
                  - generic [ref=e477]: Not Available
        - generic [ref=e479] [cursor=pointer]:
          - generic [ref=e481]:
            - img [ref=e482]
            - img [ref=e484]
          - generic [ref=e485]:
            - generic [ref=e486]:
              - generic [ref=e487]: "+918075938451"
              - generic [ref=e488]:
                - generic [ref=e490]: Meerut, Uttar Pradesh
                - generic [ref=e491]: "+918075938451"
            - generic [ref=e492]:
              - generic [ref=e494]:
                - paragraph [ref=e495]: "Cart Value:"
                - generic [ref=e496]: $600
              - generic [ref=e498]:
                - paragraph [ref=e499]: May 5, 2026 4:28 PM
                - paragraph [ref=e500]:
                  - generic [ref=e501]: Not Available
        - generic [ref=e503] [cursor=pointer]:
          - generic [ref=e505]:
            - img [ref=e506]
            - img [ref=e508]
          - generic [ref=e509]:
            - generic [ref=e510]:
              - generic [ref=e511]: "+919878978987"
              - generic [ref=e512]:
                - generic [ref=e514]: Noida, Uttar Pradesh
                - generic [ref=e515]: "+919878978987"
            - generic [ref=e516]:
              - generic [ref=e518]:
                - paragraph [ref=e519]: "Cart Value:"
                - generic [ref=e520]: $730
              - generic [ref=e522]:
                - paragraph [ref=e523]: Apr 29, 2026 8:25 PM
                - paragraph [ref=e524]:
                  - generic [ref=e525]: Not Available
      - generic [ref=e527]:
        - generic [ref=e528]:
          - generic [ref=e529]:
            - generic [ref=e531]:
              - img [ref=e532]
              - img [ref=e534]
            - generic [ref=e536]: test22516@nitrotest.com
          - generic [ref=e537]:
            - generic [ref=e538]: Cart Value
            - generic [ref=e540]: $ 600.00
        - generic [ref=e541]:
          - generic [ref=e542]:
            - generic [ref=e543]:
              - generic [ref=e544]:
                - paragraph [ref=e545]: "Total Purchases on Nitro network:"
                - generic [ref=e546]: "0"
              - generic [ref=e547]:
                - generic [ref=e548]: "Last Activity: addtocart"
                - generic [ref=e549]: "|"
                - generic [ref=e550]: May 29, 2026 12:52 PM
            - generic [ref=e551]:
              - generic [ref=e552]:
                - generic [ref=e553]:
                  - img [ref=e554]
                  - generic [ref=e556]: "+919111904185"
                - generic [ref=e557]:
                  - img [ref=e558]
                  - generic [ref=e562]: test22516@nitrotest.com
              - generic [ref=e563]:
                - generic [ref=e564]:
                  - img [ref=e565]
                  - generic [ref=e569]: Not Available
                - generic [ref=e571]:
                  - text: To fetch balance, activate Pop coins from
                  - link "Integrations" [ref=e572] [cursor=pointer]:
                    - /url: /integrations
                  - text: tab
          - generic [ref=e573]:
            - generic [ref=e575]: Activity History
            - generic [ref=e578]:
              - generic [ref=e580]:
                - generic [ref=e581]:
                  - generic [ref=e582]: Add to Cart
                  - generic [ref=e583]: May 29, 2026 12:52 PM
                - generic [ref=e584]:
                  - img [ref=e586]
                  - generic [ref=e587]:
                    - generic [ref=e588]: "The Collection Snowboard: Hydrogen"
                    - generic [ref=e589]:
                      - generic [ref=e590]: "Unit Price: 600.00"
                      - generic [ref=e591]: "Quantity: 1"
              - generic [ref=e593]:
                - generic [ref=e594]:
                  - generic [ref=e595]: Page View
                  - generic [ref=e596]: May 29, 2026 12:52 PM
                - generic [ref=e597]:
                  - paragraph [ref=e598]: https://prince-store2-2.myshopify.com/
                  - link "View Page" [ref=e599] [cursor=pointer]:
                    - /url: https://prince-store2-2.myshopify.com/
  - img [ref=e601] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { configDotenv } from "dotenv";
  3  | import { identify } from '../utils/identifyFunction';
  4  | import { TestSession } from '../utils/TestSession';
  5  | import { LoginPage } from "../pages/login.page";
  6  | import { DashboardPage } from '../pages/dashboard.page';
  7  | import { Store } from '../pages/store.page';
  8  | import { hiu_aiu } from '../pages/hiu.page';
  9  | 
  10 | 
  11 | test.use({
  12 |     storageState: "playwright/.auth/user.json"
  13 | })
  14 | 
  15 | 
  16 | test("Complete hiu_aiu test cases" , async({page}) =>{
  17 | 
  18 |      const gotoHome = new LoginPage(page)
  19 |      const hiu_things = new hiu_aiu(page)
  20 |      const store_things = new Store(page)
  21 |      const selectOrg = new DashboardPage(page)
  22 | 
  23 | 
  24 |      //Going to store and identifying user
  25 |      console.log("Going to store and identifying the user")
  26 |     
  27 |      //Opening store
  28 |      await store_things.openStore()
  29 |      console.log("-------Identifying user on store-----------")
  30 |      await page.waitForTimeout(4000)
  31 |      await identify(page)
  32 |      await page.waitForTimeout(2000)
  33 |      await store_things.addToCart(process.env.PRODUCT_URL)
  34 |      await page.waitForTimeout(2000)
  35 | 
  36 | 
  37 |      //opening home page
  38 |      await gotoHome.goto()
  39 |      await selectOrg.selectingOrg()
  40 | 
  41 |      //clicking Hiu modules
  42 |      await hiu_things.hiuModule.click()
  43 |      await hiu_things.hiuUserCard.click()
> 44 |      const hiu_email = await hiu_things.userCardEmail.textContent()
     |                                                       ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  45 | 
  46 |      //Asserting the HIU email
  47 |      console.log("Asserting the HIU email")
  48 |      await expect.soft(hiu_email).toBe(TestSession.getPhone())
  49 | 
  50 | 
  51 |      await hiu_things.downloadData()
  52 |      const download_status = await hiu_things.validateDownloadAPI()
  53 |      
  54 |      //Asserting download API status code
  55 |      console.log("Asserting download API status code")
  56 |      console.log(download_status)
  57 |      await expect(download_status).toBeTruthy()
  58 | 
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 |      
  65 | 
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | })
```