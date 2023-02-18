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

* In general, prefer use of `${{ env.MYVAR }}` over `$MYVAR` in `run` bodies (the former interpolates immediately and makes debugging WAY better)

* Using `if:` expects only expressions and thus there is no need to wrap with `${{}}`

* You can't use ${{ env.* }} values in workflow_call outputs

* [todo: document how tags/branches/etc work weirdly]
