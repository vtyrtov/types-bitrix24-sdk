# Typed Bitrix24 SDK

Type definitions for JS SDK REST API Bitrix24

## Install

Install from bitbucket repo:

`yarn install --save-dev git@bitbucket.org:b24help/types-bitrix24-sdk.git`

Add `<script src="//api.bitrix24.com/api/v1/"></script>` to the html files.

## Example

```js
if (window !== window.top) {
	window.BX24.init(() => {
		global.console.log('Is Admin: ' + window.BX24.isAdmin())
	}
}
```

## License

`types-bitrix24-sdk` is licensed under the MIT License

## Author

Vladimir Tyrtov - [info@b24.help](mailto:info@b24.help) - https://www.b24.help

## Need custom Bitrix24 application?

email: [info@b24.help](mailto:info@b24.help)
