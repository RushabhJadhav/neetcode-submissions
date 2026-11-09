class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let normalisedEmails = new Set();

        for (let item of emails) {
            let parts = item.split("@");

            let local = parts[0].split("+");
            let domain = parts[1];

            local = local[0].split(".").join("");

            normalisedEmails.add(`${local}@${domain}`);
        }

        return [...normalisedEmails].length;
    }
}
