const USERNAME = process.argv[2];

function main() {
  if (!USERNAME) {
    console.log('You need to provide a username as an argument.');
    return;
  }
  fetchData();
}

async function fetchData() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${USERNAME}/events`
    );
    const data = await response.json();

    getEvents(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

function getEvents(data) {
  const eventsObject = {};

  data.forEach((event) => {
    const { type, repo } = event;

    if (!eventsObject[type]) {
      eventsObject[type] = [
        {
          repo: repo.name,
          count: 1,
        },
      ];
    } else {
      const existingRepo = eventsObject[type].find((e) => e.repo === repo.name);
      if (existingRepo) {
        existingRepo.count++;
      } else {
        eventsObject[type].push({
          repo: repo.name,
          count: 1,
        });
      }
    }
  });

  showEvents(eventsObject);
}

function showEvents(eventsObject) {
  Object.entries(eventsObject).forEach(([type, repos]) => {
    if (type === 'PushEvent') {
      repos.forEach((repo) => {
        console.log(`- Pushed ${repo.count} commits to ${repo.repo}`);
      });
    }

    if (type === 'PullRequestEvent') {
      repos.forEach((repo) => {
        if (repo.count > 1) {
          console.log(`- Pull request to ${repo.repo} ${repo.count} times`);
        } else {
          console.log(`- Pull request to ${repo.repo}`);
        }
      });
    }

    if (type === 'WatchEvent') {
      repos.forEach((repo) => {
        console.log(`- Watched ${repo.repo}`);
      });
    }

    if (type === 'CreateEvent') {
      repos.forEach((repo) => {
        console.log(`- Created ${repo.repo}`);
      });
    }

    if (type === 'ForkEvent') {
      repos.forEach((repo) => {
        console.log(`- Forked ${repo.repo}`);
      });
    }

    if (type === 'IssuesEvent') {
      repos.forEach((repo) => {
        console.log(`- Opened ${repo.repo}`);
      });
    }

    if (type === 'IssueCommentEvent') {
      repos.forEach((repo) => {
        console.log(`- Commented on ${repo.repo}`);
      });
    }

    if (type === 'StarEvent') {
      repos.forEach((repo) => {
        console.log(`- Starred ${repo.repo}`);
      });
    }
  });
}

main();
