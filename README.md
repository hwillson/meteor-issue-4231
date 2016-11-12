# meteor-issue-4231

Repro for https://github.com/meteor/meteor/issues/4231

## Installation / Running

```
git clone https://github.com/hwillson/meteor-issue-4231.git
cd meteor-issue-4231; meteor npm install; meteor
```

## Repro Steps

1. Load [http://localhost:3000]().
2. Open your browser console.
3. Click on the "Add" button 5 times.
4. Click on the first red "X" button; the first record is removed.
5. Click on the (now) first red "X" button; this record is not removed. The id that is attempted to be used for the removal is the id from the very first record, instead of the id from the current record.
