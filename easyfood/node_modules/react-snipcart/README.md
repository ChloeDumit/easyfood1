# react-snipcart

Components for using Snipcart in React easily.

## Installation

With npm:

```bash
npm install --save react-snipcart
```

With Yarn:

```bash
yarn add react-snipcart
```

## Initiating

Initiating is no different than the standard Snipcart installation process. [Just include the usual Snipcart JS/CSS files](https://docs.snipcart.com/getting-started/installation)

## Components

### AddToCart

Adds an item to the cart. Instead of data attributes, supply all options with a data property.

[Options that can be supplied are listed here.](https://docs.snipcart.com/javascript-api-reference/public-api#add) Also, an additional option `openCart` has been added if you want the cart to open once the product has been successfully added to the cart.

Example:

```javascript
import { AddToCart } from 'react-snipcart'

...

<AddToCart data={{
		id: 'ABC123',
		name: 'Test Product',
		url: '/test-product',
		price: '499.99',
		openCart: true,
	}}>
	Add to Cart
</AddToCart>
```

### CartHasQty

Toggles children based on whether or not the cart is empty.

Example:

```javascript
import { CartHasQty } from 'react-snipcart'

...

<CartHasQty>You have something in your cart!</CartHasQty>
```

### CartQty

Shows a number of the current total items in the cart.

Example:

```javascript
import { CartQty } from 'react-snipcart'

...

<div>
	Items in cart: <CartQty />
</div>
```

## Why?

Snipcart has a few issues with React 16. Newer versions of react don't like it when DOM manipulations happen within components that were not triggered by React. The purpose of these components is to mimic much of what Snipcart does with classes, but with React components.