# mui-editable-label

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

mui-editable-label is a easy and small component Label that you can edit just by clicking.

# how to use:

```
function Demo() {
  const [text, setText] = useState("Click here to edit.");

  return (
    <div className="app">
      <MuiEditableLabel
        value={text}
        onChange={e => setText(e.target.value)}
        onFocus={t => console.log("focus", t)}
        onFocusOut={t => console.log("focus out", t)}
      />
    </div>
  );
}
```

see a example [here](https://codesandbox.io/s/mui-editable-label-example-32pxf)


# component api

| Events        | Description           | return  |
| ------------- |:-------------:| -----:|
| onChange     | a normal event of a input | event object |
| onFocus      | trigged when user clicks       |   a string input value |
| onFocusOut | trigged when user get out focus from component or press enter key      |    a string input value |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
