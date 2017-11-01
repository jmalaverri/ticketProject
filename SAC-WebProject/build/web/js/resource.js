  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>angular.js/src/ngResource/resource.js at master · angular/angular.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="fGYRKRSyeOmocwcCy37Ua79eRry0l2KotBPEk10PQW0=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-fdebe8d3f60746fb87c763a59741ff520ae3d8e8.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-d530e63e2c132c7f0e6ac7228e7e1ab9ef2a8d94.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-4037f12703c2d563310be4fcd52a229189468cce.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="80973bfd2a5cb09c53d745b26b5b1dc0">

        <link data-pjax-transient rel='permalink' href='/angular/angular.js/blob/3e4d43b42c37b589eb75c740998b671de8a5f263/src/ngResource/resource.js'>
    <meta property="og:title" content="angular.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/angular/angular.js"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/f0d91e5cf8ad1ce7972cc486baa20c42?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Contribute to angular.js development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="angular/angular.js"/>

    <meta name="description" content="Contribute to angular.js development by creating an account on GitHub." />


    
  <link href="https://github.com/angular/angular.js/commits/master.atom" rel="alternate" title="Recent Commits to angular.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="https://github.com/signup">Sign up</a>
      <a class="button" href="https://github.com/login?return_to=%2Fangular%2Fangular.js%2Fblob%2Fmaster%2Fsrc%2FngResource%2Fresource.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="angular/angular.js"
      data-branch="master"
      data-sha="560d4b25ff3821b09fe12509160ef96de6ab34a0"
  >

    <input type="hidden" name="nwo" value="angular/angular.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

    <input type="hidden" name="type" value="Code" />

  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fangular%2Fangular.js"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/angular/angular.js/stargazers">
        9,538
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fangular%2Fangular.js"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/angular/angular.js/network" class="social-count">
        1,891
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/angular" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">angular</span>
                  </a></span> /
                <strong><a href="/angular/angular.js" class="js-current-repository">angular.js</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/angular/angular.js/pulse" class="js-selected-navigation-item " data-selected-links="pulse /angular/angular.js/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/angular/angular.js" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /angular/angular.js">Code</a></li>
    <li><a href="/angular/angular.js/network" class="js-selected-navigation-item " data-selected-links="repo_network /angular/angular.js/network">Network</a></li>
    <li><a href="/angular/angular.js/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /angular/angular.js/pulls">Pull Requests <span class='counter'>52</span></a></li>

      <li><a href="/angular/angular.js/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /angular/angular.js/issues">Issues <span class='counter'>636</span></a></li>

      <li><a href="/angular/angular.js/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /angular/angular.js/wiki">Wiki</a></li>


    <li><a href="/angular/angular.js/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /angular/angular.js/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/angular/angular.js/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /angular/angular.js/tags">Tags <span class="counter ">50</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/g3_v1x/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="g3_v1x" rel="nofollow" title="g3_v1x">g3_v1x</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/location-fix/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="location-fix" rel="nofollow" title="location-fix">location-fix</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/master/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.x/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.x" rel="nofollow" title="v0.9.x">v0.9.x</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.x/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.x" rel="nofollow" title="v1.0.x">v1.0.x</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.1.4/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.4" rel="nofollow" title="v1.1.4">v1.1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.1.3/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.3" rel="nofollow" title="v1.1.3">v1.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.1.2/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.2" rel="nofollow" title="v1.1.2">v1.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.1.1/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.1" rel="nofollow" title="v1.1.1">v1.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.1.0/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.0" rel="nofollow" title="v1.1.0">v1.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.6/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.6" rel="nofollow" title="v1.0.6">v1.0.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.5/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.5" rel="nofollow" title="v1.0.5">v1.0.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.4/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.4" rel="nofollow" title="v1.0.4">v1.0.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.3/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.3" rel="nofollow" title="v1.0.3">v1.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.2/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.2" rel="nofollow" title="v1.0.2">v1.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.1/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.1" rel="nofollow" title="v1.0.1">v1.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc12/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc12" rel="nofollow" title="v1.0.0rc12">v1.0.0rc12</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc11/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc11" rel="nofollow" title="v1.0.0rc11">v1.0.0rc11</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc10/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc10" rel="nofollow" title="v1.0.0rc10">v1.0.0rc10</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc9/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc9" rel="nofollow" title="v1.0.0rc9">v1.0.0rc9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc8/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc8" rel="nofollow" title="v1.0.0rc8">v1.0.0rc8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc7/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc7" rel="nofollow" title="v1.0.0rc7">v1.0.0rc7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc6/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc6" rel="nofollow" title="v1.0.0rc6">v1.0.0rc6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc5/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc5" rel="nofollow" title="v1.0.0rc5">v1.0.0rc5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc4/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc4" rel="nofollow" title="v1.0.0rc4">v1.0.0rc4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc3/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc3" rel="nofollow" title="v1.0.0rc3">v1.0.0rc3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc2/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc2" rel="nofollow" title="v1.0.0rc2">v1.0.0rc2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0rc1/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0rc1" rel="nofollow" title="v1.0.0rc1">v1.0.0rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v1.0.0/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0" rel="nofollow" title="v1.0.0">v1.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.6/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.6" rel="nofollow" title="v0.10.6">v0.10.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.5/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.5" rel="nofollow" title="v0.10.5">v0.10.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.4/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.4" rel="nofollow" title="v0.10.4">v0.10.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.3/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.3" rel="nofollow" title="v0.10.3">v0.10.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.2/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.2" rel="nofollow" title="v0.10.2">v0.10.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.1/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.1" rel="nofollow" title="v0.10.1">v0.10.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.10.0/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.10.0" rel="nofollow" title="v0.10.0">v0.10.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.19/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.19" rel="nofollow" title="v0.9.19">v0.9.19</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.18/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.18" rel="nofollow" title="v0.9.18">v0.9.18</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.17/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.17" rel="nofollow" title="v0.9.17">v0.9.17</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.16/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.16" rel="nofollow" title="v0.9.16">v0.9.16</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.15/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.15" rel="nofollow" title="v0.9.15">v0.9.15</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.14/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.14" rel="nofollow" title="v0.9.14">v0.9.14</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.13/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.13" rel="nofollow" title="v0.9.13">v0.9.13</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.12/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.12" rel="nofollow" title="v0.9.12">v0.9.12</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.11/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.11" rel="nofollow" title="v0.9.11">v0.9.11</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.10/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.10" rel="nofollow" title="v0.9.10">v0.9.10</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.9/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.9" rel="nofollow" title="v0.9.9">v0.9.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.7/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.7" rel="nofollow" title="v0.9.7">v0.9.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.6/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.6" rel="nofollow" title="v0.9.6">v0.9.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.5/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.5" rel="nofollow" title="v0.9.5">v0.9.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.4/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.4" rel="nofollow" title="v0.9.4">v0.9.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.3/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.3" rel="nofollow" title="v0.9.3">v0.9.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.2/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.2" rel="nofollow" title="v0.9.2">v0.9.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.1/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.1" rel="nofollow" title="v0.9.1">v0.9.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/angular/angular.js/blob/v0.9.0/src/ngResource/resource.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.0" rel="nofollow" title="v0.9.0">v0.9.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/angular/angular.js" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /angular/angular.js">Files</a></li>
    <li><a href="/angular/angular.js/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /angular/angular.js/commits/master">Commits</a></li>
    <li><a href="/angular/angular.js/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /angular/angular.js/branches" rel="nofollow">Branches <span class="counter ">5</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:dbb052dd348d931d2682205de6b7b30e -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:dbb052dd348d931d2682205de6b7b30e -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">angular.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js/tree/master/src" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js/tree/master/src/ngResource" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">ngResource</span></a></span><span class="separator"> / </span><strong class="final-path">resource.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="src/ngResource/resource.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/angular/angular.js/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/fc5dc0d579fb554752763792a2d5f449?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/IgorMinar" rel="author">IgorMinar</a></span>
    <time class="js-relative-date" datetime="2013-05-08T15:08:49-07:00" title="2013-05-08 15:08:49">May 08, 2013</time>
    <div class="commit-title">
        <a href="/angular/angular.js/commit/ee2689051bb40794eeb81baf80dc0717fd9edd2a" class="message">refactor($resource): simplify url template expansion</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>21</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="IgorMinar" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=IgorMinar"><img height="20" src="https://secure.gravatar.com/avatar/fc5dc0d579fb554752763792a2d5f449?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mhevery" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=mhevery"><img height="20" src="https://secure.gravatar.com/avatar/8d67eedc1442e8392a7add197abacd66?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cedricss" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=cedricss"><img height="20" src="https://secure.gravatar.com/avatar/f3f76f7af23d6f2d724aabc07677516c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="digger69" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=digger69"><img height="20" src="https://secure.gravatar.com/avatar/d2f0d2b132885be6fcf53d715e16920e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="petrovalex" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=petrovalex"><img height="20" src="https://secure.gravatar.com/avatar/2602336776caec1e1c372d147b437f32?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pavelgj" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=pavelgj"><img height="20" src="https://secure.gravatar.com/avatar/12aa5e0243946ec41dbe13e5a506886a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pborreli" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=pborreli"><img height="20" src="https://secure.gravatar.com/avatar/5c299a02c11ce797f20df385f560a16a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="partap" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=partap"><img height="20" src="https://secure.gravatar.com/avatar/29312aa811bfa84af720d677f4ffc57a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sudhirj" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=sudhirj"><img height="20" src="https://secure.gravatar.com/avatar/4813b578ef6e0ca5ba25a77f57fdb5f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="maxmart" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=maxmart"><img height="20" src="https://secure.gravatar.com/avatar/50cc0d2a1e91caad5621a5c0a40ddd5d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="simpulton" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=simpulton"><img height="20" src="https://secure.gravatar.com/avatar/8f137d9846abf7ecc8090e482f0a68ae?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="lascap" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=lascap"><img height="20" src="https://secure.gravatar.com/avatar/0d6bf543293cffcc283530f6aa7b989c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jsyrjala" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=jsyrjala"><img height="20" src="https://secure.gravatar.com/avatar/18212b874868b1733d98b5f1f5a86338?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vojtajina" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=vojtajina"><img height="20" src="https://secure.gravatar.com/avatar/d59bdceef864e67df13167d806d6da63?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cironunes" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=cironunes"><img height="20" src="https://secure.gravatar.com/avatar/ac4189b770a4dbc0078935a68fff6f5c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="zeflasher" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=zeflasher"><img height="20" src="https://secure.gravatar.com/avatar/2481d7e0249e456d9d15cca0b203600e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="fredrikbonander" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=fredrikbonander"><img height="20" src="https://secure.gravatar.com/avatar/5f716ab15289042b7eeca73280f760ba?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cezar-berea" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=cezar-berea"><img height="20" src="https://secure.gravatar.com/avatar/b59d44900039c96c2e5140db5be09d27?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="benjamine" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=benjamine"><img height="20" src="https://secure.gravatar.com/avatar/2c3fdcac24e501ca182878f33a0bd594?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Andrew-McLeod" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=Andrew-McLeod"><img height="20" src="https://secure.gravatar.com/avatar/3587e2a8317f999634f45f3bb8b67128?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="deviousdodo" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=deviousdodo"><img height="20" src="https://secure.gravatar.com/avatar/306143f755294919d1aa0588d90e00f4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fc5dc0d579fb554752763792a2d5f449?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/IgorMinar">IgorMinar</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/8d67eedc1442e8392a7add197abacd66?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mhevery">mhevery</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f3f76f7af23d6f2d724aabc07677516c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/cedricss">cedricss</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d2f0d2b132885be6fcf53d715e16920e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/digger69">digger69</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2602336776caec1e1c372d147b437f32?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/petrovalex">petrovalex</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/12aa5e0243946ec41dbe13e5a506886a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pavelgj">pavelgj</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5c299a02c11ce797f20df385f560a16a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pborreli">pborreli</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/29312aa811bfa84af720d677f4ffc57a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/partap">partap</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4813b578ef6e0ca5ba25a77f57fdb5f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/sudhirj">sudhirj</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/50cc0d2a1e91caad5621a5c0a40ddd5d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/maxmart">maxmart</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/8f137d9846abf7ecc8090e482f0a68ae?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/simpulton">simpulton</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0d6bf543293cffcc283530f6aa7b989c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/lascap">lascap</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/18212b874868b1733d98b5f1f5a86338?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jsyrjala">jsyrjala</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d59bdceef864e67df13167d806d6da63?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/vojtajina">vojtajina</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ac4189b770a4dbc0078935a68fff6f5c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/cironunes">cironunes</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2481d7e0249e456d9d15cca0b203600e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/zeflasher">zeflasher</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5f716ab15289042b7eeca73280f760ba?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fredrikbonander">fredrikbonander</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b59d44900039c96c2e5140db5be09d27?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/cezar-berea">cezar-berea</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2c3fdcac24e501ca182878f33a0bd594?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/benjamine">benjamine</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/3587e2a8317f999634f45f3bb8b67128?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Andrew-McLeod">Andrew-McLeod</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/306143f755294919d1aa0588d90e00f4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/deviousdodo">deviousdodo</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/angular/angular.js/blob/3e4d43b42c37b589eb75c740998b671de8a5f263/src/ngResource/resource.js" data-title="angular.js/src/ngResource/resource.js at master · angular/angular.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>515 lines (471 sloc)</span>
                <span>20.529 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/angular/angular.js/raw/master/src/ngResource/resource.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/angular/angular.js/blame/master/src/ngResource/resource.js" class="button minibutton ">Blame</a>
                  <a href="/angular/angular.js/commits/master/src/ngResource/resource.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">/**</span></div><div class='line' id='LC4'><span class="cm"> * @ngdoc overview</span></div><div class='line' id='LC5'><span class="cm"> * @name ngResource</span></div><div class='line' id='LC6'><span class="cm"> * @description</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">/**</span></div><div class='line' id='LC10'><span class="cm"> * @ngdoc object</span></div><div class='line' id='LC11'><span class="cm"> * @name ngResource.$resource</span></div><div class='line' id='LC12'><span class="cm"> * @requires $http</span></div><div class='line' id='LC13'><span class="cm"> *</span></div><div class='line' id='LC14'><span class="cm"> * @description</span></div><div class='line' id='LC15'><span class="cm"> * A factory which creates a resource object that lets you interact with</span></div><div class='line' id='LC16'><span class="cm"> * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.</span></div><div class='line' id='LC17'><span class="cm"> *</span></div><div class='line' id='LC18'><span class="cm"> * The returned resource object has action methods which provide high-level behaviors without</span></div><div class='line' id='LC19'><span class="cm"> * the need to interact with the low level {@link ng.$http $http} service.</span></div><div class='line' id='LC20'><span class="cm"> *</span></div><div class='line' id='LC21'><span class="cm"> * # Installation</span></div><div class='line' id='LC22'><span class="cm"> * To use $resource make sure you have included the `angular-resource.js` that comes in Angular</span></div><div class='line' id='LC23'><span class="cm"> * package. You can also find this file on Google CDN, bower as well as at</span></div><div class='line' id='LC24'><span class="cm"> * {@link http://code.angularjs.org/ code.angularjs.org}.</span></div><div class='line' id='LC25'><span class="cm"> *</span></div><div class='line' id='LC26'><span class="cm"> * Finally load the module in your application:</span></div><div class='line' id='LC27'><span class="cm"> *</span></div><div class='line' id='LC28'><span class="cm"> *        angular.module(&#39;app&#39;, [&#39;ngResource&#39;]);</span></div><div class='line' id='LC29'><span class="cm"> *</span></div><div class='line' id='LC30'><span class="cm"> * and you are ready to get started!</span></div><div class='line' id='LC31'><span class="cm"> *</span></div><div class='line' id='LC32'><span class="cm"> * @param {string} url A parametrized URL template with parameters prefixed by `:` as in</span></div><div class='line' id='LC33'><span class="cm"> *   `/user/:username`. If you are using a URL with a port number (e.g.</span></div><div class='line' id='LC34'><span class="cm"> *   `http://example.com:8080/api`), you&#39;ll need to escape the colon character before the port</span></div><div class='line' id='LC35'><span class="cm"> *   number, like this: `$resource(&#39;http://example.com\\:8080/api&#39;)`.</span></div><div class='line' id='LC36'><span class="cm"> *</span></div><div class='line' id='LC37'><span class="cm"> * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in</span></div><div class='line' id='LC38'><span class="cm"> *   `actions` methods. If any of the parameter value is a function, it will be executed every time</span></div><div class='line' id='LC39'><span class="cm"> *   when a param value needs to be obtained for a request (unless the param was overridden).</span></div><div class='line' id='LC40'><span class="cm"> *</span></div><div class='line' id='LC41'><span class="cm"> *   Each key value in the parameter object is first bound to url template if present and then any</span></div><div class='line' id='LC42'><span class="cm"> *   excess keys are appended to the url search query after the `?`.</span></div><div class='line' id='LC43'><span class="cm"> *</span></div><div class='line' id='LC44'><span class="cm"> *   Given a template `/path/:verb` and parameter `{verb:&#39;greet&#39;, salutation:&#39;Hello&#39;}` results in</span></div><div class='line' id='LC45'><span class="cm"> *   URL `/path/greet?salutation=Hello`.</span></div><div class='line' id='LC46'><span class="cm"> *</span></div><div class='line' id='LC47'><span class="cm"> *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from</span></div><div class='line' id='LC48'><span class="cm"> *   the data object (useful for non-GET operations).</span></div><div class='line' id='LC49'><span class="cm"> *</span></div><div class='line' id='LC50'><span class="cm"> * @param {Object.&lt;Object&gt;=} actions Hash with declaration of custom action that should extend the</span></div><div class='line' id='LC51'><span class="cm"> *   default set of resource actions. The declaration should be created in the format of {@link</span></div><div class='line' id='LC52'><span class="cm"> *   ng.$http#Parameters $http.config}:</span></div><div class='line' id='LC53'><span class="cm"> *</span></div><div class='line' id='LC54'><span class="cm"> *       {action1: {method:?, params:?, isArray:?, headers:?, ...},</span></div><div class='line' id='LC55'><span class="cm"> *        action2: {method:?, params:?, isArray:?, headers:?, ...},</span></div><div class='line' id='LC56'><span class="cm"> *        ...}</span></div><div class='line' id='LC57'><span class="cm"> *</span></div><div class='line' id='LC58'><span class="cm"> *   Where:</span></div><div class='line' id='LC59'><span class="cm"> *</span></div><div class='line' id='LC60'><span class="cm"> *   - **`action`** – {string} – The name of action. This name becomes the name of the method on your</span></div><div class='line' id='LC61'><span class="cm"> *     resource object.</span></div><div class='line' id='LC62'><span class="cm"> *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`, `DELETE`,</span></div><div class='line' id='LC63'><span class="cm"> *     and `JSONP`.</span></div><div class='line' id='LC64'><span class="cm"> *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of the</span></div><div class='line' id='LC65'><span class="cm"> *     parameter value is a function, it will be executed every time when a param value needs to be</span></div><div class='line' id='LC66'><span class="cm"> *     obtained for a request (unless the param was overridden).</span></div><div class='line' id='LC67'><span class="cm"> *   - **`url`** – {string} – action specific `url` override. The url templating is supported just like</span></div><div class='line' id='LC68'><span class="cm"> *     for the resource-level urls.</span></div><div class='line' id='LC69'><span class="cm"> *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array, see</span></div><div class='line' id='LC70'><span class="cm"> *     `returns` section.</span></div><div class='line' id='LC71'><span class="cm"> *   - **`transformRequest`** – `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></div><div class='line' id='LC72'><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></div><div class='line' id='LC73'><span class="cm"> *     request body and headers and returns its transformed (typically serialized) version.</span></div><div class='line' id='LC74'><span class="cm"> *   - **`transformResponse`** – `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></div><div class='line' id='LC75'><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></div><div class='line' id='LC76'><span class="cm"> *     response body and headers and returns its transformed (typically deserialized) version.</span></div><div class='line' id='LC77'><span class="cm"> *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the</span></div><div class='line' id='LC78'><span class="cm"> *     GET request, otherwise if a cache instance built with</span></div><div class='line' id='LC79'><span class="cm"> *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for</span></div><div class='line' id='LC80'><span class="cm"> *     caching.</span></div><div class='line' id='LC81'><span class="cm"> *   - **`timeout`** – `{number}` – timeout in milliseconds.</span></div><div class='line' id='LC82'><span class="cm"> *   - **`withCredentials`** - `{boolean}` - whether to to set the `withCredentials` flag on the</span></div><div class='line' id='LC83'><span class="cm"> *     XHR object. See {@link https://developer.mozilla.org/en/http_access_control#section_5</span></div><div class='line' id='LC84'><span class="cm"> *     requests with credentials} for more information.</span></div><div class='line' id='LC85'><span class="cm"> *   - **`responseType`** - `{string}` - see {@link</span></div><div class='line' id='LC86'><span class="cm"> *     https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType requestType}.</span></div><div class='line' id='LC87'><span class="cm"> *</span></div><div class='line' id='LC88'><span class="cm"> * @returns {Object} A resource &quot;class&quot; object with methods for the default set of resource actions</span></div><div class='line' id='LC89'><span class="cm"> *   optionally extended with custom `actions`. The default set contains these actions:</span></div><div class='line' id='LC90'><span class="cm"> *</span></div><div class='line' id='LC91'><span class="cm"> *       { &#39;get&#39;:    {method:&#39;GET&#39;},</span></div><div class='line' id='LC92'><span class="cm"> *         &#39;save&#39;:   {method:&#39;POST&#39;},</span></div><div class='line' id='LC93'><span class="cm"> *         &#39;query&#39;:  {method:&#39;GET&#39;, isArray:true},</span></div><div class='line' id='LC94'><span class="cm"> *         &#39;remove&#39;: {method:&#39;DELETE&#39;},</span></div><div class='line' id='LC95'><span class="cm"> *         &#39;delete&#39;: {method:&#39;DELETE&#39;} };</span></div><div class='line' id='LC96'><span class="cm"> *</span></div><div class='line' id='LC97'><span class="cm"> *   Calling these methods invoke an {@link ng.$http} with the specified http method,</span></div><div class='line' id='LC98'><span class="cm"> *   destination and parameters. When the data is returned from the server then the object is an</span></div><div class='line' id='LC99'><span class="cm"> *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it</span></div><div class='line' id='LC100'><span class="cm"> *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,</span></div><div class='line' id='LC101'><span class="cm"> *   read, update, delete) on server-side data like this:</span></div><div class='line' id='LC102'><span class="cm"> *   &lt;pre&gt;</span></div><div class='line' id='LC103'><span class="cm">        var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC104'><span class="cm">        var user = User.get({userId:123}, function() {</span></div><div class='line' id='LC105'><span class="cm">          user.abc = true;</span></div><div class='line' id='LC106'><span class="cm">          user.$save();</span></div><div class='line' id='LC107'><span class="cm">        });</span></div><div class='line' id='LC108'><span class="cm">     &lt;/pre&gt;</span></div><div class='line' id='LC109'><span class="cm"> *</span></div><div class='line' id='LC110'><span class="cm"> *   It is important to realize that invoking a $resource object method immediately returns an</span></div><div class='line' id='LC111'><span class="cm"> *   empty reference (object or array depending on `isArray`). Once the data is returned from the</span></div><div class='line' id='LC112'><span class="cm"> *   server the existing reference is populated with the actual data. This is a useful trick since</span></div><div class='line' id='LC113'><span class="cm"> *   usually the resource is assigned to a model which is then rendered by the view. Having an empty</span></div><div class='line' id='LC114'><span class="cm"> *   object results in no rendering, once the data arrives from the server then the object is</span></div><div class='line' id='LC115'><span class="cm"> *   populated with the data and the view automatically re-renders itself showing the new data. This</span></div><div class='line' id='LC116'><span class="cm"> *   means that in most case one never has to write a callback function for the action methods.</span></div><div class='line' id='LC117'><span class="cm"> *</span></div><div class='line' id='LC118'><span class="cm"> *   The action methods on the class object or instance object can be invoked with the following</span></div><div class='line' id='LC119'><span class="cm"> *   parameters:</span></div><div class='line' id='LC120'><span class="cm"> *</span></div><div class='line' id='LC121'><span class="cm"> *   - HTTP GET &quot;class&quot; actions: `Resource.action([parameters], [success], [error])`</span></div><div class='line' id='LC122'><span class="cm"> *   - non-GET &quot;class&quot; actions: `Resource.action([parameters], postData, [success], [error])`</span></div><div class='line' id='LC123'><span class="cm"> *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`</span></div><div class='line' id='LC124'><span class="cm"> *</span></div><div class='line' id='LC125'><span class="cm"> *</span></div><div class='line' id='LC126'><span class="cm"> *   The Resource instances and collection have these additional properties:</span></div><div class='line' id='LC127'><span class="cm"> *</span></div><div class='line' id='LC128'><span class="cm"> *   - `$then`: the `then` method of a {@link ng.$q promise} derived from the underlying</span></div><div class='line' id='LC129'><span class="cm"> *     {@link ng.$http $http} call.</span></div><div class='line' id='LC130'><span class="cm"> *</span></div><div class='line' id='LC131'><span class="cm"> *     The success callback for the `$then` method will be resolved if the underlying `$http` requests</span></div><div class='line' id='LC132'><span class="cm"> *     succeeds.</span></div><div class='line' id='LC133'><span class="cm"> *</span></div><div class='line' id='LC134'><span class="cm"> *     The success callback is called with a single object which is the {@link ng.$http http response}</span></div><div class='line' id='LC135'><span class="cm"> *     object extended with a new property `resource`. This `resource` property is a reference to the</span></div><div class='line' id='LC136'><span class="cm"> *     result of the resource action — resource object or array of resources.</span></div><div class='line' id='LC137'><span class="cm"> *</span></div><div class='line' id='LC138'><span class="cm"> *     The error callback is called with the {@link ng.$http http response} object when an http</span></div><div class='line' id='LC139'><span class="cm"> *     error occurs.</span></div><div class='line' id='LC140'><span class="cm"> *</span></div><div class='line' id='LC141'><span class="cm"> *   - `$resolved`: true if the promise has been resolved (either with success or rejection);</span></div><div class='line' id='LC142'><span class="cm"> *     Knowing if the Resource has been resolved is useful in data-binding.</span></div><div class='line' id='LC143'><span class="cm"> *</span></div><div class='line' id='LC144'><span class="cm"> * @example</span></div><div class='line' id='LC145'><span class="cm"> *</span></div><div class='line' id='LC146'><span class="cm"> * # Credit card resource</span></div><div class='line' id='LC147'><span class="cm"> *</span></div><div class='line' id='LC148'><span class="cm"> * &lt;pre&gt;</span></div><div class='line' id='LC149'><span class="cm">     // Define CreditCard class</span></div><div class='line' id='LC150'><span class="cm">     var CreditCard = $resource(&#39;/user/:userId/card/:cardId&#39;,</span></div><div class='line' id='LC151'><span class="cm">      {userId:123, cardId:&#39;@id&#39;}, {</span></div><div class='line' id='LC152'><span class="cm">       charge: {method:&#39;POST&#39;, params:{charge:true}}</span></div><div class='line' id='LC153'><span class="cm">      });</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'><span class="cm">     // We can retrieve a collection from the server</span></div><div class='line' id='LC156'><span class="cm">     var cards = CreditCard.query(function() {</span></div><div class='line' id='LC157'><span class="cm">       // GET: /user/123/card</span></div><div class='line' id='LC158'><span class="cm">       // server returns: [ {id:456, number:&#39;1234&#39;, name:&#39;Smith&#39;} ];</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'><span class="cm">       var card = cards[0];</span></div><div class='line' id='LC161'><span class="cm">       // each item is an instance of CreditCard</span></div><div class='line' id='LC162'><span class="cm">       expect(card instanceof CreditCard).toEqual(true);</span></div><div class='line' id='LC163'><span class="cm">       card.name = &quot;J. Smith&quot;;</span></div><div class='line' id='LC164'><span class="cm">       // non GET methods are mapped onto the instances</span></div><div class='line' id='LC165'><span class="cm">       card.$save();</span></div><div class='line' id='LC166'><span class="cm">       // POST: /user/123/card/456 {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></div><div class='line' id='LC167'><span class="cm">       // server returns: {id:456, number:&#39;1234&#39;, name: &#39;J. Smith&#39;};</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'><span class="cm">       // our custom method is mapped as well.</span></div><div class='line' id='LC170'><span class="cm">       card.$charge({amount:9.99});</span></div><div class='line' id='LC171'><span class="cm">       // POST: /user/123/card/456?amount=9.99&amp;charge=true {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></div><div class='line' id='LC172'><span class="cm">     });</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><span class="cm">     // we can create an instance as well</span></div><div class='line' id='LC175'><span class="cm">     var newCard = new CreditCard({number:&#39;0123&#39;});</span></div><div class='line' id='LC176'><span class="cm">     newCard.name = &quot;Mike Smith&quot;;</span></div><div class='line' id='LC177'><span class="cm">     newCard.$save();</span></div><div class='line' id='LC178'><span class="cm">     // POST: /user/123/card {number:&#39;0123&#39;, name:&#39;Mike Smith&#39;}</span></div><div class='line' id='LC179'><span class="cm">     // server returns: {id:789, number:&#39;01234&#39;, name: &#39;Mike Smith&#39;};</span></div><div class='line' id='LC180'><span class="cm">     expect(newCard.id).toEqual(789);</span></div><div class='line' id='LC181'><span class="cm"> * &lt;/pre&gt;</span></div><div class='line' id='LC182'><span class="cm"> *</span></div><div class='line' id='LC183'><span class="cm"> * The object returned from this function execution is a resource &quot;class&quot; which has &quot;static&quot; method</span></div><div class='line' id='LC184'><span class="cm"> * for each action in the definition.</span></div><div class='line' id='LC185'><span class="cm"> *</span></div><div class='line' id='LC186'><span class="cm"> * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and `headers`.</span></div><div class='line' id='LC187'><span class="cm"> * When the data is returned from the server then the object is an instance of the resource type and</span></div><div class='line' id='LC188'><span class="cm"> * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD</span></div><div class='line' id='LC189'><span class="cm"> * operations (create, read, update, delete) on server-side data.</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'><span class="cm">   &lt;pre&gt;</span></div><div class='line' id='LC192'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC193'><span class="cm">     var user = User.get({userId:123}, function() {</span></div><div class='line' id='LC194'><span class="cm">       user.abc = true;</span></div><div class='line' id='LC195'><span class="cm">       user.$save();</span></div><div class='line' id='LC196'><span class="cm">     });</span></div><div class='line' id='LC197'><span class="cm">   &lt;/pre&gt;</span></div><div class='line' id='LC198'><span class="cm"> *</span></div><div class='line' id='LC199'><span class="cm"> * It&#39;s worth noting that the success callback for `get`, `query` and other method gets passed</span></div><div class='line' id='LC200'><span class="cm"> * in the response that came from the server as well as $http header getter function, so one</span></div><div class='line' id='LC201'><span class="cm"> * could rewrite the above example and get access to http headers as:</span></div><div class='line' id='LC202'><span class="cm"> *</span></div><div class='line' id='LC203'><span class="cm">   &lt;pre&gt;</span></div><div class='line' id='LC204'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC205'><span class="cm">     User.get({userId:123}, function(u, getResponseHeaders){</span></div><div class='line' id='LC206'><span class="cm">       u.abc = true;</span></div><div class='line' id='LC207'><span class="cm">       u.$save(function(u, putResponseHeaders) {</span></div><div class='line' id='LC208'><span class="cm">         //u =&gt; saved user object</span></div><div class='line' id='LC209'><span class="cm">         //putResponseHeaders =&gt; $http header getter</span></div><div class='line' id='LC210'><span class="cm">       });</span></div><div class='line' id='LC211'><span class="cm">     });</span></div><div class='line' id='LC212'><span class="cm">   &lt;/pre&gt;</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'><span class="cm"> * # Buzz client</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'><span class="cm">   Let&#39;s look at what a buzz client created with the `$resource` service looks like:</span></div><div class='line' id='LC217'><span class="cm">    &lt;doc:example&gt;</span></div><div class='line' id='LC218'><span class="cm">      &lt;doc:source jsfiddle=&quot;false&quot;&gt;</span></div><div class='line' id='LC219'><span class="cm">       &lt;script&gt;</span></div><div class='line' id='LC220'><span class="cm">         function BuzzController($resource) {</span></div><div class='line' id='LC221'><span class="cm">           this.userId = &#39;googlebuzz&#39;;</span></div><div class='line' id='LC222'><span class="cm">           this.Activity = $resource(</span></div><div class='line' id='LC223'><span class="cm">             &#39;https://www.googleapis.com/buzz/v1/activities/:userId/:visibility/:activityId/:comments&#39;,</span></div><div class='line' id='LC224'><span class="cm">             {alt:&#39;json&#39;, callback:&#39;JSON_CALLBACK&#39;},</span></div><div class='line' id='LC225'><span class="cm">             {get:{method:&#39;JSONP&#39;, params:{visibility:&#39;@self&#39;}}, replies: {method:&#39;JSONP&#39;, params:{visibility:&#39;@self&#39;, comments:&#39;@comments&#39;}}}</span></div><div class='line' id='LC226'><span class="cm">           );</span></div><div class='line' id='LC227'><span class="cm">         }</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'><span class="cm">         BuzzController.prototype = {</span></div><div class='line' id='LC230'><span class="cm">           fetch: function() {</span></div><div class='line' id='LC231'><span class="cm">             this.activities = this.Activity.get({userId:this.userId});</span></div><div class='line' id='LC232'><span class="cm">           },</span></div><div class='line' id='LC233'><span class="cm">           expandReplies: function(activity) {</span></div><div class='line' id='LC234'><span class="cm">             activity.replies = this.Activity.replies({userId:this.userId, activityId:activity.id});</span></div><div class='line' id='LC235'><span class="cm">           }</span></div><div class='line' id='LC236'><span class="cm">         };</span></div><div class='line' id='LC237'><span class="cm">         BuzzController.$inject = [&#39;$resource&#39;];</span></div><div class='line' id='LC238'><span class="cm">       &lt;/script&gt;</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'><span class="cm">       &lt;div ng-controller=&quot;BuzzController&quot;&gt;</span></div><div class='line' id='LC241'><span class="cm">         &lt;input ng-model=&quot;userId&quot;/&gt;</span></div><div class='line' id='LC242'><span class="cm">         &lt;button ng-click=&quot;fetch()&quot;&gt;fetch&lt;/button&gt;</span></div><div class='line' id='LC243'><span class="cm">         &lt;hr/&gt;</span></div><div class='line' id='LC244'><span class="cm">         &lt;div ng-repeat=&quot;item in activities.data.items&quot;&gt;</span></div><div class='line' id='LC245'><span class="cm">           &lt;h1 style=&quot;font-size: 15px;&quot;&gt;</span></div><div class='line' id='LC246'><span class="cm">             &lt;img src=&quot;{{item.actor.thumbnailUrl}}&quot; style=&quot;max-height:30px;max-width:30px;&quot;/&gt;</span></div><div class='line' id='LC247'><span class="cm">             &lt;a href=&quot;{{item.actor.profileUrl}}&quot;&gt;{{item.actor.name}}&lt;/a&gt;</span></div><div class='line' id='LC248'><span class="cm">             &lt;a href ng-click=&quot;expandReplies(item)&quot; style=&quot;float: right;&quot;&gt;Expand replies: {{item.links.replies[0].count}}&lt;/a&gt;</span></div><div class='line' id='LC249'><span class="cm">           &lt;/h1&gt;</span></div><div class='line' id='LC250'><span class="cm">           {{item.object.content | html}}</span></div><div class='line' id='LC251'><span class="cm">           &lt;div ng-repeat=&quot;reply in item.replies.data.items&quot; style=&quot;margin-left: 20px;&quot;&gt;</span></div><div class='line' id='LC252'><span class="cm">             &lt;img src=&quot;{{reply.actor.thumbnailUrl}}&quot; style=&quot;max-height:30px;max-width:30px;&quot;/&gt;</span></div><div class='line' id='LC253'><span class="cm">             &lt;a href=&quot;{{reply.actor.profileUrl}}&quot;&gt;{{reply.actor.name}}&lt;/a&gt;: {{reply.content | html}}</span></div><div class='line' id='LC254'><span class="cm">           &lt;/div&gt;</span></div><div class='line' id='LC255'><span class="cm">         &lt;/div&gt;</span></div><div class='line' id='LC256'><span class="cm">       &lt;/div&gt;</span></div><div class='line' id='LC257'><span class="cm">      &lt;/doc:source&gt;</span></div><div class='line' id='LC258'><span class="cm">      &lt;doc:scenario&gt;</span></div><div class='line' id='LC259'><span class="cm">      &lt;/doc:scenario&gt;</span></div><div class='line' id='LC260'><span class="cm">    &lt;/doc:example&gt;</span></div><div class='line' id='LC261'><span class="cm"> */</span></div><div class='line' id='LC262'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngResource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span></div><div class='line' id='LC263'>&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$http&#39;</span><span class="p">,</span> <span class="s1">&#39;$parse&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$http</span><span class="p">,</span> <span class="nx">$parse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">DEFAULT_ACTIONS</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;get&#39;</span><span class="o">:</span>    <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;GET&#39;</span><span class="p">},</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;save&#39;</span><span class="o">:</span>   <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;POST&#39;</span><span class="p">},</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;query&#39;</span><span class="o">:</span>  <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">isArray</span><span class="o">:</span><span class="kc">true</span><span class="p">},</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;remove&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;DELETE&#39;</span><span class="p">},</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;DELETE&#39;</span><span class="p">}</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">noop</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">extend</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">,</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">,</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isFunction</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">,</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$parse</span><span class="p">(</span><span class="nx">path</span><span class="p">)(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC281'><span class="cm">     * We need our custom method because encodeURIComponent is too aggressive and doesn&#39;t follow</span></div><div class='line' id='LC282'><span class="cm">     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path</span></div><div class='line' id='LC283'><span class="cm">     * segments:</span></div><div class='line' id='LC284'><span class="cm">     *    segment       = *pchar</span></div><div class='line' id='LC285'><span class="cm">     *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></div><div class='line' id='LC286'><span class="cm">     *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></div><div class='line' id='LC287'><span class="cm">     *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></div><div class='line' id='LC288'><span class="cm">     *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></div><div class='line' id='LC289'><span class="cm">     *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></div><div class='line' id='LC290'><span class="cm">     */</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%26/gi</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">).</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%3D/gi</span><span class="p">,</span> <span class="s1">&#39;=&#39;</span><span class="p">).</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%2B/gi</span><span class="p">,</span> <span class="s1">&#39;+&#39;</span><span class="p">);</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC300'><span class="cm">     * This method is intended for encoding *key* or *value* parts of query component. We need a custom</span></div><div class='line' id='LC301'><span class="cm">     * method because encodeURIComponent is too aggressive and encodes stuff that doesn&#39;t have to be</span></div><div class='line' id='LC302'><span class="cm">     * encoded per http://tools.ietf.org/html/rfc3986:</span></div><div class='line' id='LC303'><span class="cm">     *    query       = *( pchar / &quot;/&quot; / &quot;?&quot; )</span></div><div class='line' id='LC304'><span class="cm">     *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></div><div class='line' id='LC305'><span class="cm">     *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></div><div class='line' id='LC306'><span class="cm">     *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></div><div class='line' id='LC307'><span class="cm">     *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></div><div class='line' id='LC308'><span class="cm">     *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></div><div class='line' id='LC309'><span class="cm">     */</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">pctEncodeSpaces</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%40/gi</span><span class="p">,</span> <span class="s1">&#39;@&#39;</span><span class="p">).</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%3A/gi</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">).</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%24/g</span><span class="p">,</span> <span class="s1">&#39;$&#39;</span><span class="p">).</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%2C/gi</span><span class="p">,</span> <span class="s1">&#39;,&#39;</span><span class="p">).</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="p">(</span><span class="nx">pctEncodeSpaces</span> <span class="o">?</span> <span class="s1">&#39;%20&#39;</span> <span class="o">:</span> <span class="s1">&#39;+&#39;</span><span class="p">));</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="nx">defaults</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Route</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setUrlParams</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">actionUrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">actionUrl</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">template</span><span class="p">,</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span><span class="p">,</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodedVal</span><span class="p">;</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">urlParams</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\W/</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">){</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">param</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|[^\\\\]):&quot;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">url</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">urlParams</span><span class="p">[</span><span class="nx">param</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\:/g</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">);</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">urlParam</span><span class="p">){</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">urlParam</span><span class="p">)</span> <span class="o">?</span> <span class="nx">params</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">]</span> <span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">defaults</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">];</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodedVal</span> <span class="o">=</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="nx">encodedVal</span> <span class="o">+</span> <span class="s2">&quot;$1&quot;</span><span class="p">);</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(\/?):&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">leadingSlashes</span><span class="p">,</span> <span class="nx">tail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tail</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">leadingSlashes</span> <span class="o">+</span> <span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// strip trailing slashes and set the url</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/+$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set params - delegate param encoding to $http</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">params</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">ResourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">route</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC374'><br/></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actions</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">DEFAULT_ACTIONS</span><span class="p">,</span> <span class="nx">actions</span><span class="p">);</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">){</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ids</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actionParams</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">);</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">actionParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ids</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;@&#39;</span> <span class="o">?</span> <span class="nx">getter</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ids</span><span class="p">;</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span><span class="p">(</span><span class="nx">value</span> <span class="o">||</span> <span class="p">{},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">actions</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">action</span><span class="p">.</span><span class="nx">method</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">uppercase</span><span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasBody</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">method</span> <span class="o">==</span> <span class="s1">&#39;POST&#39;</span> <span class="o">||</span> <span class="nx">action</span><span class="p">.</span><span class="nx">method</span> <span class="o">==</span> <span class="s1">&#39;PUT&#39;</span> <span class="o">||</span> <span class="nx">action</span><span class="p">.</span><span class="nx">method</span> <span class="o">==</span> <span class="s1">&#39;PATCH&#39;</span><span class="p">;</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">,</span> <span class="nx">a3</span><span class="p">,</span> <span class="nx">a4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">4</span><span class="o">:</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a4</span><span class="p">;</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//fallthrough</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">3</span><span class="o">:</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">2</span><span class="o">:</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a2</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//fallthrough</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;Expected between 0-4 arguments [params, data, success, error], got &quot;</span> <span class="o">+</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s2">&quot; arguments.&quot;</span><span class="p">;</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC434'><br/></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="k">this</span> <span class="k">instanceof</span> <span class="nx">Resource</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">httpConfig</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;params&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;isArray&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">httpConfig</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">copy</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">httpConfig</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span><span class="p">.</span><span class="nx">setUrlParams</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">,</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">action</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{}),</span> <span class="nx">params</span><span class="p">),</span> <span class="nx">action</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC446'><br/></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">markResolved</span><span class="p">()</span> <span class="p">{</span> <span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">$http</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">);</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">markResolved</span><span class="p">,</span> <span class="nx">markResolved</span><span class="p">);</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$then</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">response</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">then</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">$then</span><span class="p">,</span> <span class="nx">resolved</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span><span class="p">;</span></div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$then</span> <span class="o">=</span> <span class="nx">then</span><span class="p">;</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="nx">resolved</span><span class="p">;</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">success</span><span class="o">||</span><span class="nx">noop</span><span class="p">)(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">response</span><span class="p">.</span><span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC471'><br/></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">response</span><span class="p">.</span><span class="nx">resource</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">response</span><span class="p">;</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">error</span><span class="p">).</span><span class="nx">then</span><span class="p">;</span></div><div class='line' id='LC475'><br/></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC478'><br/></div><div class='line' id='LC479'><br/></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="s1">&#39;$&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">,</span> <span class="nx">a3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">extractParams</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">3</span><span class="o">:</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span> <span class="nx">error</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">2</span><span class="o">:</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a2</span> <span class="o">||</span> <span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;Expected between 1-3 arguments [params, success, error], got &quot;</span> <span class="o">+</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s2">&quot; arguments.&quot;</span><span class="p">;</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">hasBody</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC505'><br/></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">additionalParamDefaults</span><span class="p">){</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ResourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">additionalParamDefaults</span><span class="p">),</span> <span class="nx">actions</span><span class="p">);</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC509'><br/></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Resource</span><span class="p">;</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ResourceFactory</span><span class="p">;</span></div><div class='line' id='LC514'>&nbsp;&nbsp;<span class="p">}]);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06989s from fe16.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/angular/angular.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.07032' data-host='fe16'></span>
    
  </body>
</html>

