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

* Do _NOT_ use ${{ env.* }} in a composite action's `outputs` as it will silently fail and provide an empty string instead
  * INSTEAD! remember composites are executed on the _SAME_ machine and thus you can refer to any env vars set within them directly (i.e. no need to pass them as outputs!)

* In the `on/push` trigger, use of `tags(-ignore)` with `paths` doesn't work. You have to also include `branches` (e.g. with a value of `**` to include any branch name when trying to match a path).

* Multiline ENV values work like this:
    ```
          - run: |
          echo 'FOO<<EOF' >> $GITHUB_ENV
          echo 'one' >> $GITHUB_ENV
          echo 'two' >> $GITHUB_ENV
          echo 'three' >> $GITHUB_ENV
          echo 'EOF' >> $GITHUB_ENV
    ```
