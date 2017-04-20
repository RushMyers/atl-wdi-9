# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)\

# grocery_category = Category.create(name: "grocery store")
# sports_category = Category.create(name: "sports")

# # Create lots of data
# Todo.create(content: "Grab some milk", category_id: grocery_category.id )
# Todo.create(content: "A dozen bananas", category_id: grocery_category.id)

# Todo.create(content: "Play soccer", category_id: sports_category.id)
# Todo.create(content: "Shoot hoops", category_id: sports_category.id)
Article.delete_all
Comment.delete_all

social_article = Article.create(title: 'Social Theory & Health', content: "Did you present a paper at the ISA Forum of Sociology, Vienna (July 10-14, 2016)? Was your paper related to theoretical issues and methodological problems in aging, health and life course? Then we’d like to hear from you!
We are pleased to announce a forthcoming special issue of STH entitled ‘Emerging Issues for a Global Health Sociology’, to be comprised of papers selected by the Global Health Sociology Network – a coordinated effort between the three official international associations (or sections of them) of Medical and Health Sociology: The International Sociological Association Research Committee 15 (ISA RC15) on Sociology of Health, the European Sociological Association Research Network 16 (ESA RN16) on Sociology of Health and Illness, and the European Society for Health and Medical Sociology (ESHMS).
The ISA RC15 will select papers on the sub-topic of ‘Aging, health and life course: theoretical issues and methodological problems’ from those presented at the ISA Forum of Sociology in Vienna. The two selected papers will be selected by the ISA before being submitted to STH for double-blind peer review and examination according to the normal editorial policy and rules of the journal.
We invite ISA Forum participants to elaborate their papers according to the journal’s instructions for authors and send them accordingly to guido_giarelli@tin.it. The deadline for the submission of the paper is March 31, 2017.
")
bio_article = Article.create(title: "BioSocieties", content: "We are pleased to announce the appointment of Dr. Anne Pollock (Georgia Institute of Technology, USA) to the BioSocieties editorial team, as Associate Editor. Dr. Pollock’s expertise and experience are a welcome addition to the journal and we warmly welcome her aboard.
Dr. Pollock is an Associate Professor of Science, Technology and Culture at the Georgia Institute of Technology and she is also the Coordinator of the Graduate Certificate in Science, Technology and Society. Her research and teaching focus on biomedicine and culture, theories of race and gender, and how science and medicine are mobilized in social justice projects, and she is especially interested in how medical categories and technologies are enrolled in telling stories about identity and difference. Dr. Pollock’s ongoing projects explore three key areas: feminism and heart disease; American health disparities and citizenship claims; and drug discovery efforts by and for the global south (especially South Africa).
")
simulation_article = Article.create(title: "Journal of Simulation", content: "Call for papers
The JOS editors are delighted to present this call for papers for a special issue on System Dynamics. Guest edited by Martin Kunc, Sally Brailsford and John Morecroft, the journal is interested in submissions that discuss: mode conceptualisation, model development and testing, policy development, and other areas. Please read the full call for details. Deadline for submission is March 31st, 2017.
First virtual special issue of Journal of Simulation
The editors of the Journal of Simulation are delighted to present, as part of their celebrating 10 year anniversary, a hand-picked collection of articles from the journal. Each article, selected from that year's volume, represents the finest scholarship that JOS has published in the last decade, headed by a brand new editorial written by Stewart Robinson and Simon Taylor. Read for FREE here and celebrate 10 years with us!" )

Comment.create( commenter: "jill287", content: "love this article!", article_id: social_article.id )
Comment.create( commenter: "cool_beans69", content: "sick article dog", article_id: social_article.id )
Comment.create( commenter: "sassy77", content: "hate this", article_id: social_article.id )
Comment.create( commenter: "mark98", content: "very interesting", article_id: bio_article.id )
Comment.create( commenter: "bill9393", content: "nice", article_id: bio_article.id)
Comment.create( commenter: "jj33", content: "awesome stuff", article_id: bio_article.id )
Comment.create( commenter: "mary_j_blah", content: "can't get enough of this", article_id: simulation_article.id )
Comment.create( commenter: "zed", content: "sweet", article_id: simulation_article.id )
Comment.create( commenter: "sally73", content: "love this stuff", article_id: simulation_article.id )
