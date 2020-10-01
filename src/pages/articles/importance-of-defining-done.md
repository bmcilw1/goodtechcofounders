---
templateKey: article-page
seoSlug: importance of defining done
title: The Importance of Defining "Done"
date: 2020-10-01T01:22:24.129Z
description: Once the time has come to begin software development, the first
  thing that must be decided is what it means to complete work on a new task or
  feature.
featuredImage:
  image: /img/donefeature.png
  attribution: <a
    href="https://pixabay.com/users/StockSnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2589418">StockSnap</a>
    from <a
    href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2589418">Pixabay</a>
  alt: Checklist
featuredPost: false
tags:
  - Software Development
  - Outsourcing
  - MVP
---
Once the time has come to begin software development, the first thing that must be decided is what it means to complete work on a new task or feature. In software development, this is called a definition of "done".

When creating this formula, there is no perfect answer. Trade-offs must be considered and accepted when deciding which requirements make sense for your situation. I will provide my general opinion on where I like to include each.

Here are some possible candidates. You must determine which "should" should apply to you.

1. New features should be personally tested and signed off on by a project stakeholder (someone who manages the budget) in addition to the development team. 

   * I am cautious in considering exceptions to this.
2. New features should be personally tested and signed off on by someone who uses the software every day.

   * I think of this group as the real boss. In my own businesses, the feedback from this group (in aggregate) precedes even the feedback of the stakeholder. Choose what you wish for your own project. To me, this is what really matters.
3. New features should include automated testing of each new individual units of logic created (unit testing). This is to be written by the developer who created the feature.

   * I am generally a supporter of this view, though I also believe the level of exhaustiveness of the tests should vary with the stage of the project.
4. New components of the system should include automated testing of the integration with all existing systems (integration testing).

   * This can save so many simple errors, especially around new live deployments. If you are going to require unit tests on your project, I would also require integration tests.
5. New features should include automated testing of each new interaction with the UI created (UI-level testing). 

   * I personally believe this much less of a requirement than unit testing and am comfortable delaying its priority until after some initial scale and real customer usage has been achieved.
6. New features should include automated testing of the feature as a whole (end-to-end testing).

   * I believe this extremely useful, but most of the benefit is realized with just a few tests that involve every component of the system.
7. New features should include documentation for other developers briefly but adequately explaining how the code accomplishes the feature.

   * I would most wish this requirement when development is done by external aid rather than in-house employees. However, it can certainly be appropriate to enforce even then.
8. New features should include documentation for the end-user explaining how to use the interface.

   * I personally would recommend hiring outside help of non-developers to produce this if needed.

I hope this helps you make an informed decision about what you need for the current stage of your project!

Let's make some more reliable software!