# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "clear old seed data"
User.destroy_all
Profile.destroy_all
Program.destroy_all
Exercise.destroy_all

User.reset_pk_sequence
Profile.reset_pk_sequence
Program.reset_pk_sequence
Exercise.reset_pk_sequence

puts "create admin account"
admin = User.create(first_name:"admin", last_name:"admin", email:"admin", username:"admin", password:"admin", password_confirmation:"admin")

puts "create example user account"
example_user = User.create(first_name:"Leo", last_name:"Chen", email:"chenl3@example.com", username:"chenl3", password:"test", password_confirmation:"test")

puts "create profile info for example user account"
example_profile = Profile.create(age:"22", gender:"Male", height:"176", weight:"70", fitness_goal:"Strength", nutrition_goal:"Calories", user_id:example_user.id)

puts "exercise database"
exercise_chest_1 = Exercise.create(name:"Push-Up", target_area:"Chest", img:"", video:"")
exercise_chest_2 = Exercise.create(name:"Dip", target_area:"Chest", img:"", video:"")
exercise_chest_3 = Exercise.create(name:"Bench Press", target_area:"Chest", img:"", video:"")
exercise_chest_4 = Exercise.create(name:"Incline Bench Press", target_area:"Chest", img:"", video:"")
exercise_chest_5 = Exercise.create(name:"Dumbbell Pull-Over", target_area:"Chest", img:"", video:"")
exercise_chest_6 = Exercise.create(name:"Chest Fly", target_area:"Chest", img:"", video:"")
exercise_chest_7 = Exercise.create(name:"Cable Crossover", target_area:"Chest", img:"", video:"")

exercise_triceps_1 = Exercise.create(name:"Triceps Bar Pressdown", target_area:"Triceps", img:"", video:"")
exercise_triceps_2 = Exercise.create(name:"Lying Triceps Extension", target_area:"Triceps", img:"", video:"")
exercise_triceps_3 = Exercise.create(name:"Cable Overhead Triceps Extension", target_area:"Triceps", img:"", video:"")

exercise_calves_1 = Exercise.create(name:"Standing Calf Raise", target_area:"Calves", img:"", video:"")
exercise_calves_2 = Exercise.create(name:"Seated Machine Calf Raise", target_area:"Calves", img:"", video:"")
exercise_calves_3 = Exercise.create(name:"Leg Press Calf Raise", target_area:"Calves", img:"", video:"")

exercise_back_1 = Exercise.create(name:"Deadlift", target_area:"Back", img:"", video:"")
exercise_back_2 = Exercise.create(name:"Dumbbell Bent-Over Row", target_area:"Back", img:"", video:"")
exercise_back_3 = Exercise.create(name:"Wide-Grip Pulldown", target_area:"Back", img:"", video:"")
exercise_back_4 = Exercise.create(name:"Standing Pulldown", target_area:"Back", img:"", video:"")
exercise_back_5 = Exercise.create(name:"Straight Arm Pulldown", target_area:"Back", img:"", video:"")

exercise_biceps_1 = Exercise.create(name:"Barbell Curl", target_area:"Biceps", img:"", video:"")
exercise_biceps_2 = Exercise.create(name:"Dumbbell Incline curl", target_area:"Biceps", img:"", video:"")
exercise_biceps_3 = Exercise.create(name:"Cable Curl", target_area:"Biceps", img:"", video:"")

exercise_core_1 = Exercise.create(name:"Crunch", target_area:"Core", img:"", video:"")
exercise_core_2 = Exercise.create(name:"Oblique Crunch", target_area:"Core", img:"", video:"")
exercise_core_3 = Exercise.create(name:"Plank", target_area:"Core", img:"", video:"")

exercise_shoulder_1 = Exercise.create(name:"Dumbbell Shoulder Press", target_area:"Shoulders", img:"", video:"")
exercise_shoulder_2 = Exercise.create(name:"Dumbbell Lateral Raise", target_area:"Shoulders", img:"", video:"")
exercise_shoulder_3 = Exercise.create(name:"One-Arm Cable Front Raise", target_area:"Shoulders", img:"", video:"")
exercise_shoulder_4 = Exercise.create(name:"High Cable Rear Delt Fly", target_area:"Shoulders", img:"", video:"")

exercise_traps_1 = Exercise.create(name:"Dumbbell Shrug", target_area:"Traps", img:"", video:"")

exercise_legs_1 = Exercise.create(name:"Squat", target_area:"Legs", img:"", video:"")
exercise_legs_2 = Exercise.create(name:"Leg Press", target_area:"Legs", img:"", video:"")
exercise_legs_3 = Exercise.create(name:"Lying Leg Curl", target_area:"Legs", img:"", video:"")
exercise_legs_4 = Exercise.create(name:"Hip Thrust", target_area:"Legs", img:"", video:"")
exercise_legs_5 = Exercise.create(name:"Leg Extension", target_area:"Legs", img:"", video:"")


puts "program database"
example_program = Program.create(name:"Strength", times_per_week:"4", reps:"8", sets:"4", profile_id:example_profile.id, exercise_id:exercise_chest_1.id)
example_program = Program.create(name:"Size", times_per_week:"4", reps:"6", sets:"4", profile_id:example_profile.id, exercise_id:exercise_chest_1.id)
example_program = Program.create(name:"Endurance", times_per_week:"4", reps:"10", sets:"4", profile_id:example_profile.id, exercise_id:exercise_chest_1.id)


puts "done seeding"