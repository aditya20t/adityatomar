---
title: "Mathematics Isn’t Culture-Free: Probing Cultural Gaps via Entity and Scenario Perturbations"
authors:
- Aditya Tomar
- Nihar Ranjan Sahoo
- Ashish Mittal
- Rudra Murthy
- Pushpak Bhattacharyya
date: "2025-07-02T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-07-02T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: |
 Although mathematics is often considered culturally neutral, the way mathematical problems are presented can carry implicit cultural context. Existing benchmarks like GSM8K are predominantly rooted in Western norms, including names, currencies, and everyday scenarios. In this work, we create culturally adapted variants of the GSM8K test set for five regions Africa, India, China, Korea, and Japan using prompt-based transformations followed by manual verification. We evaluate six large language models (LLMs), ranging from 8B to 72B parameters, across five prompting strategies to assess their robustness to cultural variation in math problem presentation. Our findings reveal a consistent performance gap: models perform best on the original US-centric dataset and comparatively worse on culturally adapted versions. However, models with reasoning capabilities are more resilient to these shifts, suggesting that deeper reasoning helps bridge cultural presentation gaps in mathematical tasks.

# Summary. An optional shortened abstract.
summary: |
 This work shows that large language models perform best on US-centric math problems but struggle with culturally adapted variants, highlighting a need for culturally robust benchmarks, while reasoning-focused models prove more resilient.

tags:
- Large Language Models

featured: true

links:
# - name: Custom Link
#   url: http://example.org
url_pdf: https://arxiv.org/pdf/2507.00883
url_code: https://arxiv.org/pdf/2507.00883
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
<!-- 
This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
