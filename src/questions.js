'use strict';

module.exports = {
    /**
     * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
     * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
     */
/** Cloudwatch, metric and log based. real-time and non-real time.  know names of default metrics so can tell difference from custom metrics
 ** IAM: 3rd party account access
 **     other accounts accessing yours (web/corportate federation, best practices for cross-account access)
 **     you accessing resources in other accounts
 **     how to securely provide files from S3 to EC2
 ** Knowledge of A/B testing or Blue/Green deployment methods
 ** Cloudformation: basic syntax, operation, advanced concepts: cfn-init, updates to stacks, usage of proper keywords
 	  multi-stack or nested
 	  attributes
 	  custom resources
 	  creation policies
 **   What custom resources are and how to leverage them into other bespoke systems
 **   What is a WaitCondition and how is WaitConditionhandlers related, in detail and effectively
 ** Autoscaling groups inside and out, instance state, lifecycle hooks, 
       ways in which pause/standby/suspending processes/instances.  Scheduled scaling
    Specifically, what is defined where and the fact you can’t change a launch configuration once set on an autoscaling group.


 ** use and store credentials across the AWS playform, EC2 roles, how non-AWS credential storage is done effectively
 ** OPSWork: layers, deployment methof, deployment commanfd, lifecycle, berksfile
 ** Beanstalk back to front, including .ebextensions, and docker integrates.  versioning, deployment methods, config updates if/when/how non-Linux OS can be used, ie: windows 2012.  docker with windows?
 https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html
 https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-resources.html
 https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html

 ** log management strategies for EC2 instances: cloudwatch logs, S3 storage, glacier transfer using lifecycle policies
 ** standard and custom cloudwatch metrics, how to extend these with custom values based on pure metrics and log filters
 ** CloudTrail
 ** kinesis: usage for log ingestion
 ** FAQ's
 https://www.reddit.com/r/aws/comments/474hcm/devops_professional_sample_exam_answers/
 https://d0.awsstatic.com/training-and-certification/docs/AWS_certified_DevOps_Engineer_Professional_SampleExam.pdf
 https://d0.awsstatic.com/Train%20%26%20Cert/docs/AWS_certified_devops_engineer_professional_blueprint.pdf
 couple questions on DynamoDB, CloudSearch, S3, RDS, SWF, docker
 DeletionPolicy is an attribute not a property
 Whitepper scalabilty and deployment services
**/
   
    "QUESTIONS_EN_US" : [
        {
            "Can Cloudformation Templates cause interruptions?": [
                "Depends on the resource and property that you are updating",
                "Always",
                "Never",
                "Only if the --allow-interruption command line flag is specified"
            ]
        },
        {
            "If you want to update existing instances when you update the LaunchConfiguration resource, you must:": [
                "Specify an update policy attribute on the AWS:AutoScaling::AutoScalingGroup resource",
                "Specify an update property for each Cloudformation Resource",
                "Use OpsWorks to perform the updates",
                "Stop the instances from the Console first"
            ]
        },
        {
            "What feature of git can be used notify a continous integration server of a new check-in?": [
                "Post-receive hooks",
                "Merge notifications",
                "Pre-commit hooks",
                "None, as continous integration is automatically enabled in git"
            ]
        },
        {
            "Which of the following is Not a valid Cloudformation UpdatePolicy?": [
                "AutoScalingBlueGreenUpdate",
                "AutoScalingReplacingUpdate",
                "AutoScalingRollingUpdate",
                "AutoScalingScheduledAction"
            ]
        },
        {
            "Which of the following changes won't trigger a Cloudformation AutoScalingReplacingUpdate or AutoScalingRollingUpdate policy?": [
                "Change the Auto Scaling group's AvailabilityZones",
                "Change the Auto Scaling group's AWS::AutoScaling::LaunchConfiguration",
                "Change the Auto Scaling group's VPCZoneIdentifier property",
                "Update an Auto Scaling group that contains instances that don't match the current LaunchConfiguration"
            ]
        },
        {
            "Which of the following is Not true of Cloudformation Custom Resources?": [
                "S3 VPC Endpoints are not supported",
                "Custom Resources must send responses to a pre-signed Amazon S3 URL",
                "Service tokens are required",
                "Responses can also include name-value pairs that the template developer can access"
            ]
        },
        {
            "Which of the following is not a valid Cloudformation Resource Attribute?": [
                "ResponsePolicy",
                "CreationPolicy",
                "DeletionPolicy",
                "DependsOn"
            ]
        },
        {
            "A Cloudformation DeletionPolicy provides the ability to delete snapshots of resources belonging to the stack?": [
                "False",
                "True",
                "True only when --allow-deletion is specified",
                "True only when --enable-deletion is specified"
            ]
        },
        {
            "Cloudformation Creation Policies are preferred over Wait Condition in which of the following?": [
                "EC2 and Auto Scaling resources",
                "Always",
                "Never",
                "VPCGatewayAttachments"
            ]
        }
    ]
};
