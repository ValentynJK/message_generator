const random_number = num => {
    return Math.floor(Math.random()*num)
}
const message_elements = {
    secret_level: ['top secret', 'firs level of secret', 'Not so secret', 'Just do not tell your mother'],
    agent_name: ['Ithan Khan', 'Napoleon Solo', 'James Bond', 'Illya Kuryakin', 'Gary Unwin'],
    agent_code: ['Dirty Jack', '002', '007', 'Friday', 'Gustav'], 
    kind_of_mission: ['"you are about to die"', 'dreadful', 'child play', 'weekend', 'global scale'], 
    enemie: ['russian KGB', 'North Korea', 'Belarus'], 
    enemie_role: ['spy', 'agent', 'morons'], 
    what_is_done: ['kidnapped', 'killed', 'stolen'], 
    object_of_action: ['Royal Prince', 'Nuclear Engineer', 'Our happiness'], 
    aim: ['restore the world force balance', 'kill them all', 'bring everything back'], 
    tools: ['license to kill', 'new badass Astonmartin', 'M-16 on your back'], 
    end_of_the_message: ['God save the Queen', 'Good bless you', 'Good luck', 'We will take care of your family']
}
let random_object = Object.create(message_elements);
for (let element in message_elements) {
    let rand_num = random_number(message_elements[element].length); 
    random_object[element] = message_elements[element][rand_num];
    
}
