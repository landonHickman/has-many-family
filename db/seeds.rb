# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Family.destroy_all

5.times do
 f = Family.create( name: Faker::Name.last_name)
 5.times do
  p = f.people.create( name: Faker::Name.first_name)
   5.times do
     p.pets.create( name: Faker::Creature::Animal.name)
   end
 end
end
puts "Seeded Family #{Family.all.size}"
puts "Seeded Person #{Person.all.size}"
puts "Seeded Pet #{Pet.all.size}"