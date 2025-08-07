import mongoose from 'mongoose';
import slugify from 'slugify'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: false
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    imagePublicId: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// ********** Pre-Save Middleware for Slug ************
productSchema.pre('save', function (next) {
    if (this.isModified('name') && this.name) {
        this.slug = slugify(this.name, { lowercase: true, strict: true });
    }
    next();
});

const productModel = mongoose.model('product', productSchema);

export default productModel;