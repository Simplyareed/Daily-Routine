// Define the profile object
const profile = {
    name: 'Your Name',
    age: 25,
    location: 'Your City',
    bio: 'Write a short bio about yourself',
    interests: ['Interest 1', 'Interest 2', 'Interest 3'],
};

// Display the profile information
console.log('Profile Information:');
console.log('-------------------');
console.log(`Name: ${profile.name}`);
console.log(`Age: ${profile.age}`);
console.log(`Location: ${profile.location}`);
console.log(`Bio: ${profile.bio}`);
console.log('Interests:');
profile.interests.forEach((interest, index) => {
    console.log(`${index + 1}. ${interest}`);
});

// Update profile information
console.log('\nUpdating Profile Information:');
console.log('-----------------------------');
profile.name = 'New Name';
profile.age = 30;
profile.location = 'New City';
profile.bio = 'Write a new bio about yourself';
profile.interests.push('Interest 4');

// Display the updated profile information
console.log('\nUpdated Profile Information:');
console.log('----------------------------');
console.log(`Name: ${profile.name}`);
console.log(`Age: ${profile.age}`);
console.log(`Location: ${profile.location}`);
console.log(`Bio: ${profile.bio}`);
console.log('Interests:');
profile.interests.forEach((interest, index) => {
    console.log(`${index + 1}. ${interest}`);
});