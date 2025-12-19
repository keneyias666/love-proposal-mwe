SportsStore/
│
├── Components/                    # View Components (CREATE THIS FOLDER)
│   └── CartSummaryViewComponent.cs
│
├── Models/                        # Data Models (CREATE THIS FOLDER)
│   ├── Product.cs
│   ├── Cart.cs
│   ├── Order.cs
│   ├── StoreDbContext.cs
│   ├── SeedData.cs
│   └── SessionExtensions.cs
│
├── Pages/                         # Razor Pages (EXISTS)
│   ├── Shared/                    # Shared layouts
│   │   ├── Components/            # View Component Views (CREATE THIS)
│   │   │   └── CartSummary/
│   │   │       └── Default.cshtml
│   │   ├── _Layout.cshtml         # Main layout (MODIFY)
│   │   └── _ValidationScriptsPartial.cshtml (EXISTS)
│   │
│   ├── Index.cshtml               # Product listing page (MODIFY)
│   ├── Index.cshtml.cs            # Product listing code-behind (MODIFY)
│   ├── Cart.cshtml                # Shopping cart page (CREATE)
│   ├── Cart.cshtml.cs             # Cart code-behind (CREATE)
│   ├── Checkout.cshtml            # Checkout page (CREATE)
│   ├── Checkout.cshtml.cs         # Checkout code-behind (CREATE)
│   ├── Completed.cshtml           # Order completion page (CREATE)
│   ├── Completed.cshtml.cs        # Completion code-behind (CREATE)
│   ├── _ViewImports.cshtml        # Global imports (MODIFY)
│   └── _ViewStart.cshtml          # View start (EXISTS)
│
├── wwwroot/                       # Static files (EXISTS)
│   ├── css/
│   │   └── site.css               # Custom styles (MODIFY)
│   ├── js/
│   │   └── site.js                # Custom JavaScript (optional)
│   └── lib/                       # Client libraries
│
├── appsettings.json               # Configuration (EXISTS)
├── Program.cs                     # Application startup (MODIFY)
└── SportsStore.csproj             # Project file (MODIFY)