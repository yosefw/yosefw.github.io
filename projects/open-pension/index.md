---
layout: project
title: Open Pension
subtitle: Revealing pension funds from the inside
tags: [information architecture, interaction design, visual design]
url: http://openpension.org.il
time: May 2013—present
type: Voluntary project
cover-image: assets/v2/portfolio.png
excerpt: Open Pension is voluntary <a href="https://en.wikipedia.org/wiki/Open_data">open data</a> project, aimed at to open up data about the Israeli pension market. My job was (and still is) to convert this abstract project goal into a useful product. I joined the project on May 2013. We're a team of 7 volunteers, usually contributing several hours a week to the project. While the project is still under development, it has already garnared the attention and co-operation of both the press and the Ministary of Finance.
---

About the project
-----------------
The aim Open Pension is to open up data about the Israeli pension market. As a result, we hope to see more public interest in the ways pension funds manage our money. In Israel, every employee has to transfer a part of their salary to a pension fund. As a result, these funds, usually ran by private insurance companies, are a very big player in the capital market, routing huge sums of money into the economy. Every quarter, each fund has to publish its assets allocation. So the data about each fund's investment policy is available, but it's much hard to get a broader perspective of the entire pension market. At Open Pension, we collect these reports and aggregate them into a single database. This allows users to explore and analyze how the public’s money is being invested.

Open Pension is voluntary project under the auspice of the [Public Knowledge Workshop](http://www.hasadna.org.il/). It is developed and maintained by volunteers, including myself, each usually contributing 3-4 hours of work per week.

The Team
--------
- Project leader
- 3 full-stack developers
- Designer (me)
- Data analyst
- Capital market analyst (subject matter expert)

When I joined the project in May 2013, only the project leader and the developers were on the team. A few months later, we were joined by the other 2 members. Other people have joined the team for short periods, but this has been the core team dedicated to the project.

What I did
----------
Other than designing the interface itself, which is mostly an individual effort, I always sought to facilitate conversations. These conversation moved to project forward by helping us focus on the right goals, the right audiences and the right features.

### Initial conversations
First order of business was to understand what the product we're building is exactly. We started collecting raw data from the pension funds' websites, but the "consumer" facing part was still vague.

I started with familiarizing myself with the raw data we collect from the pension funds' quarterly reports. For each asset the fund invests in, it has to report a plethora of details, from the asset's type and investment amount to its interest rate and estimated value. I soon realized that not all of these details are of equal importance when observing the entire pension market. So I started a conversation about **the most important details that our users would care about**. Soon enough, we managed to narrow down the list to 7-8 key detail types.

In parallel to this conversation, I felt it's neccessary to discuss **who our audience is exactly**. We all agreed that the project must cater to researchers and repoters who are interested in data. But like in many other open data project, there was a latent desire to also make the project approachable for "the avarage Joe". **I advocated that we should only cater to researchers and reporters and not "the masses"**. [I've explained this approach in length on my blog](For reasons I detailed [in my blog](https://medium.com/social-commentary/the-open-data-hubris-70d12be222e0). In a nutshell - it's extremely hard to interest the uninterested with raw data. They need stories that are meaningful to them. Therefore, we have a better chance to create the impact we want by making our data accessible to professional storytellers. While having my work used by thousands of people is always a fantasy, I felt that for the sake of this project I must insist that we limit the scope to the audiences that would make the most use out of it. It took a while to get other team members on board, but it has paid dividends ever since. **Feature prioritization has become much easier** once a common agreement about our audience was achieved.First order of business was to understand what the product we're building is exactly. We started collecting raw data from the pension funds' websites, but the "consumer" facing part was still vague.

I started with familiarizing myself with the raw data we collect from the pension funds' quarterly reports. For each asset the fund invests in, it has to report a plethora of details, from the asset's type and investment amount to its interest rate and estimated value. I soon realized that not all of these details are of equal importance when observing the entire pension market. So I started a conversation about **the most important details that our users would care about**. Soon enough, we managed to narrow down the list to 7-8 key detail types.

In parallel to this conversation, I felt it's neccessary to discuss **who our audience is exactly**. We all agreed that the project must cater to researchers and repoters who are interested in data. But like in many other open data project, there was a latent desire to also make the project approachable for "the avarage Joe". **I advocated that we should only cater to researchers and reporters and not "the masses"**. [I've explained this approach in length on my blog](For reasons I detailed [in my blog](https://medium.com/social-commentary/the-open-data-hubris-70d12be222e0). In a nutshell - it's extremely hard to interest the uninterested with raw data. They need stories that are meaningful to them. Therefore, we have a better chance to create the impact we want by making our data accessible to professional storytellers. While having my work used by thousands of people is always a fantasy, I felt that for the sake of this project I must insist that we limit the scope to the audiences that would make the most use out of it. It took a while to get other team members on board, but it has paid dividends ever since. **Feature prioritization has become much easier** once a common agreement about our audience was achieved.

### First iteration
On the back end, all the reports were combined into one huge table, which in essense represented the entire pension market. We identified a few key parameters we thought users might be interested to slice the market by, such as type of assets and asset rating. Essentially, users will start at the "market" level, and slice it however they please, to get the data they're interested in.

I started wireframing the UI with a "mobile first" approach. Although we had no reason to believe we'll get alot of traffic from mobile, **I insisted on using "mobile first" to easily structure the main UI template** - a slice of the market.

### Feedback
It took us about 3 months to implement the design (bare in mind we're only working on this 4-5 hours a week). The database wasn't complete yet (and still isn't - this remains the project's top challange), but we started showing it to postential users anyway. After getting some feedback, and having "dog fooding" it ourselves, we realized that we missed something. Our users don't think of the pension market as this huge blob of data to slice and dice. **Instead, they percieve the pension market as comprised of several distinct entities:**

* On the one hand, there are the "investors": the insurance companies who manage the pension funds and decide how to invest the money
* One the other, there are the "investees": companies that recieve the invested money through the assets they sell to the pension funds (shares, options, bonds, loans etc).

In essence, our users are mostly intersted in exploring how the money is invested, comparing the investment strategies of different insurance companies and revealing possible "dark" connections between investors and investees that influence our savings.

### Second iteration (current version)
Upon realizing this, I set to re-design Open Pension to better emphasize this information architectue. We started with the "investors" Instead of endless slicing and dicing, the user started at the portfolio of an insurance companies. Each portfolio allows the user to examine the insurance company's investments through the important parameters we identifed in the beginning. For example, users can focus on investments in government bonds, investments in a specific company, investments in the banking industry etc.

For each investment, we show:

* its absolute size in NIS
* its relative size to the portfolio
* its trend over the past 4 quarters

The investments are laid out in compact tables and sorted by size. This allows quick comparison and identifaction of exceptional investment sizes.

### Feedback
The new design got much better feedback. The users we were in touch with got around it much better. The aesthetics were much appreciated by everyone. Although the database is still incomplete, the design itself got us appreciation and cooperation from journalists and researchers. The project was presented to the Director of Capital Market, Insurance and Savings Department in the Minister of Finance. She was very impressed with the project, and directed her office to help us gather all the information we need from the pension funds. In addition, she promised to work with us on creating an API for this information, so we won't have to scrape the data by hand from each fund's individual fund. By all measures, this is a siginificant achievement for voluntary non-profit project such as this.

What would I have done differently
----------------------------------
