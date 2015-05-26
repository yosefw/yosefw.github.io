---
layout: project
title: Plint
subtitle: Matchmaking for business events
tags: [Startup, Product, Interaction design, Visual design, Branding]
time: July–October 2014
cover-image: assets/cover-img.png
excerpt: Plint was a short-lived startup that I joined as a co-founder. The idea was to create an <em>OKCupid</em> for conferences. Attendees would sign up, check into upcoming conferences, see other attendees and schedule meetings with them at the conference. This was the first time I took over all design related responsibilities for what was supposed to be the long run. After 4 months of work, we decided to shut down the project due to personal differences in our vision of the company. Although we disbanded at an early stage, I managed to create a solid design system that I was very pleased with, and gained some real-life startup experience.
---

## About the project

Plint was our attempt to solve a real business problem — *how can conference attendees meet the right people?* The idea originated with one of the founders, who had a business development background. In his previous jobs, he would use conferences to find new clients and business opportunities. The problem was that there was no way to know whom he should meet at the conference. Some attendees invest considerable resources in researching conferences online and finding out as much as possible about other participants. But the majority just improvise on the scene.

With Plint, we wanted to help conference attendees find business matches and set up meetings at the conference, thus helping them to achieve their business goals.

## What I did

I joined the startup more than a month after the other two co-founders, who had already chosen the problem that they wanted to solve, but had not yet quite figured out how to do so. They were talking to many potential users, confirming the need, learning how they address it using existing tools, getting to know the market. So the problem was well-defined by the time I joined. The solution, however, was not.

### Interviewing potential users

We spoke to more than a dozen potential users: biz devs, entrepreneurs, managers and personal assistants. All of them attend conferences on a regular basis to promote their business goals. 

We found several pain points that we wanted to address:

* **Research is expensive**
Most of the people we interviewed dedicate considerable resources -- both time and manpower -- to researching conference attendees. Some also spend money on external services to find information or improve on whatever they’ve already found.
* **The company is more important than the person**
When deciding whom they should try to reach out to, our interviewees said they are more interested in the company represented than in an individual’s personal profile. This means information like industry, company size and growth stage are key factors in deciding whom to meet.
* **Existing products aren’t good enough**
Although the conf-tech industry is very crowded, it seems that no app is focusing on conference attendees. Most apps cater to event organizers, helping them manage the event. Any social capabilities allowing attendees to connect with each other are byproducts of the organizers’ needs.
* **Work tool, not social network**
Another insight was that researching conferences was a work task, not something you do on your phone in your spare time. Mobile interfaces are too restrictive. Our users wanted the ability to export information as well as integration with other tools like spreadsheets and calendars. One interviewee even told us that he had one of his workers go over an event’s mobile app and copy all information about participants into Excel. Our potential users needed a solution that runs on a desktop computer.

### Designing the MVP

Following the pain points we identified, we decided on this set of features for our first core product offering:

* **Sign up**
People could sign up with their LinkedIn accounts, from which we’ll import relevant data about them and their companies.
* **Check-in**
Users could check-in to conferences they plan to attend (the first conferences we’d support would be hand selected by us).
* **Conference information**
For each conference, users could view information about the speakers and agenda. We thought this would attract the first attendees in each conference to check-in and thus create the initial pool of attendees.
* **Browsing known attendees**
Users who check-in would be able to filter all listed attendees by personal and company attributes (job title, seniority, industry, company size etc.).
* **Desktop first**
Since this is a work took, we decided to focus first on a desktop optimized website.

<figure>
  <div class="img-3-row">
    <img src="assets/design/sketches/sketch-1.jpeg" />
    <img src="assets/design/sketches/sketch-2.jpeg" />
    <img src="assets/design/sketches/sketch-3.jpeg" />
  </div>
  <figcaption>
    Pen-and-paper concept sketches from our second meeting
  </figcaption>
</figure>


Within a few days, I had the main screens sketched out in Balsamiq.

<div class="slider">
  <img src="assets/design/wireframes/homepage-v2.png" />
  <img src="assets/design/wireframes/attendees.png" />
  <img src="assets/design/wireframes/inbox.png" />
  <img src="assets/design/wireframes/sessions.png" />
  <img src="assets/design/wireframes/plan-v2.png" />
  <img src="assets/design/wireframes/sign-up.png" />
</div>


### Hacking the brand

When we were all satisfied with the main screen’s structure and flow, I moved on to branding and visual language. Since we were dealing with a tool for business development, I wanted our brand to convey values of growth and success. During that time, I was also helping my grandfather at his farm, where we were growing corn. The growing corn leaves had such a fresh and invigorating green color, I decided it was a perfect match for our brand.

For the logo itself, I wanted to play on the metaphor of face to face meetings. Since I didn’t have much previous experience with logo design, I knew this had the potential to spiral out of hand. Therefore, I decided to limit myself to a very short design session, and come back to it in the future.

  <figure>
    <div class="img-3-row">
      <img src="assets/logo/attempts/attempt-23.png" alt="...">
      <img src="assets/logo/attempts/attempt-28.png" alt="...">
      <img src="assets/logo/attempts/attempt-42.png" alt="...">
    </div>
    <div class="img-3-row">
      <img src="assets/logo/attempts/attempt-43.png" alt="...">
      <img src="assets/logo/attempts/attempt-45.png" alt="...">
      <img src="assets/logo/attempts/attempt-50.png" alt="...">
    </div>
    <figcaption>
      Six draft versions
    </figcaption>
  </figure>
  
  <figure>
    <img src="assets/logo/logo.png" alt="...">
    <figcaption>
      The final logo
    </figcaption>
  </figure>
  
  <figure>
    <div class="img-3-row">
      <img src="assets/logo/v2/v2a.png" alt="...">
      <img src="assets/logo/v2/v2b.png" alt="...">
      <img src="assets/logo/v2/v2c.png" alt="...">
    </div>
    <figcaption>
      Experiments with a new logo design, a task I didn’t get the chance to finish
    </figcaption>
  </figure>


### Building a visual language

Before figuring out the visual language, I consulted with my partners regarding their aesthetic preferences. They named products such as Quora, GitHub, Trello and Yelp as appealing to their taste. All of these products present a clean visual language, in which the brand is present but the content gets the front seat.

Like most other web projects that I have been involved with in the last few years, I started with [Bootstrap](http://getbootstrap.com/) and tweaked the visual language to match our goals and taste.

<div class="slider">
  <img src="assets/design/comps/homepage.png" />
  <img src="assets/design/comps/sign-up.png" />
  <img src="assets/design/comps/complete-your-profile.png" />
  <img src="assets/design/comps/complete-your-profile-error.png" />
  <img src="assets/design/comps/attendees.png" />
  <img src="assets/design/comps/profile.png" />
  <img src="assets/design/comps/sessions.png" />
  <img src="assets/design/comps/session.png" />
</div>

### Designing our pitch deck

As we started preparing for meetings with potential investors, I invested considerable time in designing our pitch deck and refining our messaging. Below is the last version I worked on before closing shop.

<figure>
  <img src="assets/pitch-deck/slide03.png" />
  <figcaption>
    <a href="assets/pitch-deck/plint-deck.pdf" role="button">View the complete deck</a>
  </figcaption>
</figure>

### Creating a future concept

In the last few weeks of our work together, I dedicated some time to visualizing our future user experience — a fully automated matchmaking service for conferences. In our vision, we saw a system that recommends which events are worth attending based on the business opportunities they present.

1. Users will be notified that a conference with people they should meet is taking place.
2. They’ll browse the matches we found for them.
3. They’ll invite those they’re interested in to meet during the conference. The system will automatically suggest times and places that fit the conference’s location and timetable.
4. All scheduled meetings and conference sessions will be synced to the user’s calendar, creating a personal schedule for the conference.

I created mockups for the main interaction points, with the intention of including them in our pitch deck.
  
<div class="slider">
  <img src="assets/future-concept/comps/notification.png" />
  <img src="assets/future-concept/comps/matches.png" />
  <img src="assets/future-concept/comps/invites.png" />
  <img src="assets/future-concept/comps/my-agenda.png" />
</div>

## Aftermath

We ended up dissolving the company after only 5 months, just before launching our MVP, because of personal differences. Despite that, I value this experience and do not regret taking part in the project. For me, it was a significant professional challenge. My benefits included:

* **Startup cred**
I was in the trenches and saw what the first months of startups really look like. Despite the doubts, fears and constant pressure, I endured, pushed forward, and prepared to keep it up for the long run.
* **First large scale design challenge**
This was the first comprehensive design system that I had to figure out on my own: UX, UI, branding and marketing materials. My craftsmanship improved, and I’m very proud of the results.

All in all, this experience has proved to me that I really want to be part of an early stage startup. Although my next position is going to be as a hired employee, I believe I’ll return to the founder seat sooner or later.
