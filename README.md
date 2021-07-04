# @4lch4/pblib

This project/repository serves as a library for interacting with the [PushBullet API][0].

## What's With The Name?

I originally called this module `@4lch4/PushBullet` but the more I thought about it, I didn't want any issues with using the PushBullet name for my library. As a result, I'll call it `@4lch4/pblib`, which is just short for `PushBullet Lib`.

## Features

- Fully featured with every possible endpoint available (w/ exception to OAuth, more on that below)
- Utility classes to help transform/interact with the responding data.
- Written in TypeScript, enabling full IntelliSense support.

## Authentication

At first, I'm only going to be supporting authentication via Access Tokens, primarily due to my lack of familiarity with OAuth. This doesn't mean I won't support it, just the first few versions. Once the base features are complete, I'll work on the OAuth support and publish it as soon as possible.

[0]: https://docs.pushbullet.com/
