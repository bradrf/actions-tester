* Log a context:
    ```
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJson(github) }}
        run: echo "$GITHUB_CONTEXT" | jq
    ```

* Use a final dep that can have an array of optional `needs` (runs if success() or cancel() but not failure()):
    ```
      if: '!failure()'
      needs: [one, two, three]
    ```

* You _MUST_ use single quotes in all expressions (i.e. within `${{}}`)!

* Using `if:` expects only expressions and thus there is no need to wrap with `${{}}`

* [todo: document how tags/branches/etc work weirdly]