---
title: Talking to GPT-3 using Apple Shortcuts
date: 2023-02-05
excerpt: I made a shortcut to have a back and forth conversation with GPT-3 using Siri on your iPhone, Mac or Apple Watch. It's a fun and easy way to explore what is possible with GPT-3.
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/l5jaDn-oFAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Summary

- I’ve put together a shortcut in Apple Shortcuts, that lets you have a back-and-forth conversation with GPT-3 through Siri on your Mac, iPhone or Apple Watch.
- I think this is a fun and easy way to explore what GPT-3 can do, and an accessible way to interact with a very smart AI assistant.
- Add the shortcut here: [Add 'Talk to GPT' shortcut to Shortcuts](https://www.icloud.com/shortcuts/b8ac6d1529114614877f51daae101019)

## What is GPT-3?

- A “large language model”, trained on a huge number of webpages, that can respond to prompts written in natural language, with pretty amazing results
- If you haven’t played around with it yet, I’d recommend signing up for an OpenAI account and using the ‘playground’ to experiment.
- Caveat: this is not ChatGPT - this is using GPT-3 with text-davinci-003 model, using a fairly simple prompt. But the ChatGPT API is coming soon.

## What is Apple Shortcuts?

- Shortcuts is an app for macOS and iOS that lets you create little scripts, without needing to learn a programming language
- You can create shortcuts on your Mac or iPhone, and then use them across your devices, including your Apple Watch

## Setting up the ‘Talk with GPT’ shortcut

- Signing up for an OpenAI account and getting your API key
- Adding the shortcut with your API key
  - [https://www.icloud.com/shortcuts/b8ac6d1529114614877f51daae101019](https://www.icloud.com/shortcuts/b8ac6d1529114614877f51daae101019)
- Once it has been set up, you can say to Siri 'Talk with GPT' to run the shortcut.

## The way the shortcut works

- Each time you ask a question, it adds the question and answer to a saved text file in iCloud Drive
- Each time you ask a question, it includes the previous chat history in the prompt, so it has the contextual information to keep the conversation going
- At the end of the shortcut, it runs the shortcut again, so that you can keep the conversation going seamlessly
- The technical details are explained in the video above.

## Ideas for next steps

- Token limitations - as your conversation gets longer, it will use more and more tokens
  - This means that it becomes more expensive, and also will eventually meet the maximum number of tokens
  - Split the text into lines and only keep the last X number of lines. That way, the ‘past conversation’ only includes the more recent questions and answers.
- Ability to ‘reset’ the conversation
  - At the moment, the only way to reset the conversation is to manually delete the ‘GPT history.txt’ file in iCloud Drive → Shortcuts
  - If you say ‘reset the conversation’, it should delete the history text file
- Other things you could do with Shortcuts + GPT-3
  - There’s a lot more you can do with this, outside of simple back-and-forth conversations
  - You can make a shortcut that appears in the ‘share sheet’ on iOS, so you can pass content
  - You can make a shortcut that appears in ‘Services’ on macOS, so you could select some text and run a shortcut that summarises the text, for example
- Adding personalised knowledge, to improve the output
  - This is more advanced, but I’d recommend checking out the open source libraries gpt-index and LangChain, if this sounds interesting to you
  - If you set up a web app with endpoint URLs for sending queries, you could use an Apple Shortcut to interact with the web app quite easily

Thanks for reading, I hope this is an interesting example of how you can play around with GPT-3 and what you can do with Apple Shortcuts. Feel free to reach out if you have any ideas or feedback.

## Update: extra 'Ask GPT about this' shortcut

Following on from the ideas I shared above, I created another 'Ask GPT about this' shortcut. It's a really simple shortcut &ndash; all it does is:

- use the 'get text from input' shortcut to turn the shared content into text
- ask the user for a question
- combine the text and the question into a prompt
- send the API request to OpenAI
- show the result.

[I shared a video demonstrating what it can do on Mastodon](https://indieweb.social/@larryhudson/109820216818549786). You can install the shortcut yourself here: [Add 'Ask GPT about this' shortcut to Shortcuts](https://www.icloud.com/shortcuts/bb6c28f1d101491688df993a236091c4).
