"use client";
import { HeartIcon } from "./Icons";
import { useCart } from "../CartContext";
export default function WishlistButton({ product, compact = false }) { const { wishlist, toggleWishlist } = useCart(), saved = wishlist.includes(product.id); return <button className={compact ? "wishlist-button compact" : "wishlist-button"} onClick={() => toggleWishlist(product.id)} aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`} aria-pressed={saved}><HeartIcon filled={saved} /></button> }