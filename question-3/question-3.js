// Using the fs module for working with the files
const fs = require("fs");
// Defining the logs' path folder
const target = "./logs";

const removeLogs = () => {
    if (fs.existsSync(target)) {
        process.chdir(target);
        fs.readdir(process.cwd(), (error, files) => {
            files.forEach((file) => {
                fs.unlink(file, (error) =>
                    error ? console.error(`Error: Cannot delete file: '${file}'`) : console.log(`delete files...${file}`)
                );
            });
        });
    }
};
//----------------------------------------------------------------------------------------------------------------

const createLogs = () => {
    // Checking if the logs exists or not
    if (!fs.existsSync(target)) {
        // If not log folder is created
        fs.mkdirSync(target);
    }
    // All the logs from 0 to 9 are created using for loop inside the ./logs
    process.chdir(target);
    for (let i = 0; i < 10; i++) {
        // Defining an error in case of an exception
        fs.writeFile(`log${i}.txt`, `This is the log file number ${i}`, (error) =>
            error ? console.error(`Error: Cannot create 'log${i}.txt'`) : console.log(`log${i}.txt`)
        );
    }
};


// Calling in the create/remove log functions.
//console.log(createLogs());
console.log(removeLogs());