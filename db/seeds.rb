# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "clear old seed data"
Program.destroy_all
Program.reset_pk_sequence

Exercise.destroy_all
Exercise.reset_pk_sequence

Profile.destroy_all
Profile.reset_pk_sequence

User.destroy_all
User.reset_pk_sequence


puts "create example user account"
example_user = User.create(first_name:"Leo", last_name:"Chen", email:"chenl3@example.com", username:"chenl3", password:"test", password_confirmation:"test")

# puts "create admin account"
# admin = User.create(first_name:"admin", last_name:"admin", email:"admin", username:"admin", password:"admin", password_confirmation:"admin")

puts "create profile info for example user account"
example_profile = Profile.create(age:"22", gender:"Male", height:"176", weight:"70", fitness_goal:"Strength", nutrition_goal:"Calories", user_id:example_user.id)

puts "exercise database"
chest_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/268476679_295356869318751_1679286911571809898_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=FcI3LPNmlvIAX9vvNMW&_nc_ht=scontent-lga3-2.xx&oh=03_AVIJie4UzmpnC7uIlieGd4ilPqFmu8Fi2CSlZK-6VMWDIw&oe=61F73DE4"
exercise_chest_1 = Exercise.create(name:"Push-Up", target_area:"Chest", img:chest_img_link, video:"")
exercise_chest_2 = Exercise.create(name:"Dip", target_area:"Chest", img:chest_img_link, video:"")
exercise_chest_3 = Exercise.create(name:"Bench Press", target_area:"Chest", img:chest_img_link, video:"")
exercise_chest_4 = Exercise.create(name:"Incline Bench Press", target_area:"Chest", img:chest_img_link, video:"")
exercise_chest_5 = Exercise.create(name:"Dumbbell Pull-Over", target_area:"Chest", img:chest_img_link, video:"")
exercise_chest_6 = Exercise.create(name:"Chest Fly", target_area:"Chest", img:chest_img_link, video:"")
exercise_chest_7 = Exercise.create(name:"Cable Crossover", target_area:"Chest", img:chest_img_link, video:"")

triceps_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/268522052_1367994240304741_3889065449633628050_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=mX99HaxPekkAX-dsjd_&_nc_ht=scontent-lga3-2.xx&oh=03_AVKNoTouDVUBwxcd8aQVJF7kNdXCx4bWEMkkr3FGQihCMQ&oe=61F88F41"
exercise_triceps_1 = Exercise.create(name:"Triceps Bar Pressdown", target_area:"Triceps", img:triceps_img_link, video:"")
exercise_triceps_2 = Exercise.create(name:"Lying Triceps Extension", target_area:"Triceps", img:triceps_img_link, video:"")
exercise_triceps_3 = Exercise.create(name:"Cable Overhead Triceps Extension", target_area:"Triceps", img:triceps_img_link, video:"")

calves_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/269733752_650941612726166_4252016553156500933_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=psth4q5zLIsAX8glhvH&_nc_ht=scontent-lga3-2.xx&oh=03_AVJGUFs9nq-l0NRcDnxm2MGFaGJKZuS2REvHIqdqEqlH7g&oe=61F88431"
exercise_calves_1 = Exercise.create(name:"Standing Calf Raise", target_area:"Calves", img:calves_img_link, video:"")
exercise_calves_2 = Exercise.create(name:"Seated Machine Calf Raise", target_area:"Calves", img:calves_img_link, video:"")
exercise_calves_3 = Exercise.create(name:"Leg Press Calf Raise", target_area:"Calves", img:calves_img_link, video:"")

back_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/266620365_1262261074295554_5536341440789251275_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=VoO2FZhTuv8AX881Ioy&_nc_ht=scontent-lga3-2.xx&oh=03_AVKx882cYnt0Cyu9jE4L6cj0yIC08ef6sKBIJSUqAw2nBw&oe=61F9852A"
exercise_back_1 = Exercise.create(name:"Deadlift", target_area:"Back", img:back_img_link, video:"")
exercise_back_2 = Exercise.create(name:"Dumbbell Bent-Over Row", target_area:"Back", img:back_img_link, video:"")
exercise_back_3 = Exercise.create(name:"Wide-Grip Pulldown", target_area:"Back", img:back_img_link, video:"")
exercise_back_4 = Exercise.create(name:"Standing Pulldown", target_area:"Back", img:back_img_link, video:"")
exercise_back_5 = Exercise.create(name:"Straight Arm Pulldown", target_area:"Back", img:back_img_link, video:"")

biceps_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/269817426_3036115573369893_2394499919560288300_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=et87UNAFaE8AX9q8-Zh&tn=J0W_7GHedW-k0UGO&_nc_ht=scontent-lga3-2.xx&oh=03_AVI8rAXHGm4UfyKNMp4JfsEaPFu6ytM-EQOAXr0BZIA3ew&oe=61F7EF40"
exercise_biceps_1 = Exercise.create(name:"Barbell Curl", target_area:"Biceps", img:biceps_img_link, video:"")
exercise_biceps_2 = Exercise.create(name:"Dumbbell Incline curl", target_area:"Biceps", img:biceps_img_link, video:"")
exercise_biceps_3 = Exercise.create(name:"Cable Curl", target_area:"Biceps", img:biceps_img_link, video:"")

core_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/266004447_497896118237647_4935109797395577156_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=vD4PmEOkH3kAX-33UpN&_nc_ht=scontent-lga3-2.xx&oh=03_AVL68IutOf0CQnbsd3yKBjo1JARX1ZH4hMDKWiHodl_Amw&oe=61F9E7A3"
exercise_core_1 = Exercise.create(name:"Crunch", target_area:"Core", img:core_img_link, video:"")
exercise_core_2 = Exercise.create(name:"Oblique Crunch", target_area:"Core", img:core_img_link, video:"")
exercise_core_3 = Exercise.create(name:"Plank", target_area:"Core", img:core_img_link, video:"")

shoulder_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/269387172_702559791131096_4594061313571280691_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=cZ0mDwbttMIAX-pp16f&_nc_ht=scontent-lga3-2.xx&oh=03_AVLabroMVZtvG1cQFrTYmh15kVykzoCTQx-8qfrOY54Pjg&oe=61F89102"
exercise_shoulder_1 = Exercise.create(name:"Dumbbell Shoulder Press", target_area:"Shoulders", img:shoulder_img_link, video:"")
exercise_shoulder_2 = Exercise.create(name:"Dumbbell Lateral Raise", target_area:"Shoulders", img:shoulder_img_link, video:"")
exercise_shoulder_3 = Exercise.create(name:"One-Arm Cable Front Raise", target_area:"Shoulders", img:shoulder_img_link, video:"")
exercise_shoulder_4 = Exercise.create(name:"High Cable Rear Delt Fly", target_area:"Shoulders", img:shoulder_img_link, video:"")

traps_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/265960553_332607045115259_4146957274260922370_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=cPcvMwDSJs0AX_bFIfV&_nc_ht=scontent-lga3-2.xx&oh=03_AVJJtZzoY-nFXrbYFiW3knQSYK-4iRtdH6j0skqehr22eA&oe=61FAEB66"
exercise_traps_1 = Exercise.create(name:"Dumbbell Shrug", target_area:"Traps", img:traps_img_link, video:"")

legs_img_link = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/269965531_404975004756101_3545376462909148476_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=iVWgQTdAxKoAX9R2E8i&_nc_ht=scontent-lga3-2.xx&oh=03_AVL6HJe-JCbbWYQH3qAecaD7mRSJpFWWvS6cR9NIHnIUoA&oe=61F8F070"
exercise_legs_1 = Exercise.create(name:"Squat", target_area:"Legs", img:legs_img_link, video:"")
exercise_legs_2 = Exercise.create(name:"Leg Press", target_area:"Legs", img:legs_img_link, video:"")
exercise_legs_3 = Exercise.create(name:"Lying Leg Curl", target_area:"Legs", img:legs_img_link, video:"")
exercise_legs_4 = Exercise.create(name:"Hip Thrust", target_area:"Legs", img:legs_img_link, video:"")
exercise_legs_5 = Exercise.create(name:"Leg Extension", target_area:"Legs", img:legs_img_link, video:"")


puts "program database"
example_program = Program.create(name:"Strength", times_per_week:"4", reps:"8", sets:"4", profile_id:example_profile.id, exercise_id:exercise_chest_1.id)
example_program = Program.create(name:"Size", times_per_week:"4", reps:"6", sets:"4", profile_id:example_profile.id, exercise_id:exercise_chest_1.id)
example_program = Program.create(name:"Endurance", times_per_week:"4", reps:"10", sets:"4", profile_id:example_profile.id, exercise_id:exercise_chest_1.id)


puts "done seeding"