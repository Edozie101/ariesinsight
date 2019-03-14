# app.rb
require "sinatra"

get "/404"do
    #error.html.erb
    erb :fourofour
end
get "/" do
    #index.html.erb
   erb :index
end

get "/about-us" do
    #about.html.erb
    erb :about 
end

get "/benefits" do
    #benefits.html.erb
    erb :benefits 
end

get "/blog-item" do
    #blog_item.html.erb
    erb :blog_item
end

get "/blog" do
    #blog.html.erb
    erb :blog
end

get "/contact-us" do
     #contact.html.erb
    erb :contact
end

get "/autoenrollment" do
     #autoenrollment.html.erb

    erb :autoenrollment
    
end

get "/index-coming-soon" do
     #indexcs.html.erb

    erb :indexcs
end

get "/index-single-page" do
     #indexsp.html.erb

    erb :indexsp
end

get "/project-item" do 
     #project.html.erb

    erb :project
    
end

get "/services" do
    #services.html.erb
    erb :services
    
end

get "/vlog" do 
    #vlog.html.erb

    erb :vlog
end


get "/project-item" do 

	erb :project-item
end

