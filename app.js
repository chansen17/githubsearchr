$(function() {
    $('#searchUser').on('keyup', function(e) {
        let username = e.target.value;
        
        // Make request to github
        $.ajax({
            type: 'GET', 
            url: 'https://api.github.com/users/'+username,
            data: {
                client_id: '5600ac438baebeaa8f60',
                client_secret: '9069733726d62dd1909acac4d767817eb7b0dce4'
            }
        }).done(function(user) {
            console.log(user)
            $('#profile').html(`
                <div class="card text-center max-width: 540px">
                    <img src="${user.avatar_url}" alt="Card image cap">
                    <div class="card-body">
                    <h4 class="card-title">${user.name}</h4>
                    <p class="card-text"></p>
                    <button id="detailsButton">See details</button>
                    <a target="_blank" href="${user.html_url}" class="link link-primary">See Profile</a>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-success">Following: ${user.following}</span>
                        </div>
                    </div>
                </div>

                <div class="modal" tabindex="-1" role="dialog" id="detailsModal>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            `);
        });
    });
});

$(function() {
    $('#detailsButton').click(function() {
        $('#detailsModal').modal('show');
    })
})