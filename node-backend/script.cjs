// seed.js
const mongoose = require("mongoose");

// Replace this with your own MongoDB URI
const MONGODB_URI = "mongodb+srv://admin:adminPass@cluster0.8dmnxke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  description: String,
  category: String,
  images: [String],
  details: [String],
  sizes: [String],
});

const Product = mongoose.model("Product", productSchema);



const products = [
  {
    "id": 1,
    "name": "Batman Black Oversized T-Shirt (Vengeance)",
    "price": "Rs. 799",
    "description": "Dark, Bold, and Unapologetically Gotham.",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872494/18_b8hb1n.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 2,
    "name": "Sinner Black Oversized T-Shirt ",
    "price": "Rs. 799",
    "description": "Born to Sin, Destined to Rule",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872497/6_zexrhg.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872497/4_v8thos.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 3,
    "name": "Simpsons Lavender Oversized T-Shirt",
    "price": "Rs. 799",
    "description": "Bold, Bright, and Cartoon-Inspired",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872511/9_mktsla.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 4,
    "name": "The Weeknd Inspired Black Oversized T-Shirt",
    "price": "Rs. 799",
    "description": "Dark, Dreamy, and Musically Charged",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872495/12_luttr7.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872499/13_ipmclg.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 5,
    "name": "The Dark knight Offwhite Oversized T-Shirt",
    "price": "Rs. 799",
    "description": "Cinematic Cool Meets Street-Ready Style.",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872498/7_x6e3th.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872504/8_ctbi80.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 6,
    "name": "Goated White Oversized T-Shirt",
    "price": "Rs. 799",
    "description": "Premium Build. Iconic Energy.",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872517/23_kgyth4.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872506/25_tfb77a.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872501/26_roupgw.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 7,
    "name": "Venom Pulse Oversized Black T-Shirt",
    "price": "Rs. 799",
    "description": "Symbiote Energy. Streetwear Precision.",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872506/3_ums15r.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872496/1_l9n6qp.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 8,
    "name": "Love & War White Oversized T-Shirt",
    "price": "Rs. 799",
    "description": "Sword & Petals—Balance in Every Thread.",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872517/22_fjeycv.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872516/21_n7hrmy.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": 9,
    "name": "Hashira Oversized Black T-Shirt",
    "price": "Rs. 799",
    "description": "Wear the Will of the Strongest.",
    "category": "clothing",
    "images": [
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872505/17_ggiwca.png",
      "https://res.cloudinary.com/docmkserp/image/upload/w_1024,h_1024,c_fill/v1744872508/16_rol8qh.png"
    ],
    "details": [
      "Material: 100% French Terry cotton for maximum comfort",
      "Fabric Treatment: Biowash for enhanced softness and durability",
      "GSM: 240 GSM for a premium, heavyweight feel",
      "Fit: Oversized, relaxed fit for a streetwear vibe"
    ],
    "sizes": ["M", "L", "XL"]
  }
]


async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB ✅");

    await Product.deleteMany({});
    console.log("Cleared existing data ⚠️");

    await Product.insertMany(products);
    console.log("Products inserted successfully ✅");

    mongoose.disconnect();
  } catch (err) {
    console.error("Error inserting products ❌", err);
  }
}

seedDatabase();
